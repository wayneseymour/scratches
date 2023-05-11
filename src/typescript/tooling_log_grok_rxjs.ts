import * as Rx from 'rxjs';

import { format } from 'util';

import chalk from 'chalk';

const LEVELS = ['silent', 'error', 'warning', 'success', 'info', 'debug', 'verbose'] as const;

/*
 * Copyright Elasticsearch B.V. and/or licensed to Elasticsearch B.V. under one
 * or more contributor license agreements. Licensed under the Elastic License
 * 2.0 and the Server Side Public License, v 1; you may not use this file except
 * in compliance with, at your election, the Elastic License 2.0 or the Server
 * Side Public License, v 1.
 */

/**
 * Basic set of log-level flags, the common levels implemented between
 * the ToolingLog and the kbn_pm logger
 */
export type SomeLogLevel = 'verbose' | 'debug' | 'info' | 'quiet';

/**
 * Generic interface that is implemented by the ToolingLog and the logger
 * used by kbn_pm, which is responsible for running before the repo is
 * bootstrapped and therefore can't use the ToolingLog.
 */
export interface SomeDevLog {
  /**
   * Log an info message
   */
  info(msg: string, ...rest: any[]): void;
  /**
   * Log a warning message
   */
  warning(msg: string, ...rest: any[]): void;
  /**
   * Log an error message
   */
  error(msg: string, ...rest: any[]): void;
  /**
   * Log a success message
   */
  success(msg: string, ...rest: any[]): void;
  /**
   * Log a debug message. Only printed to the terminal when --debug or --verbose are passed
   */
  debug(msg: string, ...rest: any[]): void;
  /**
   * Log a verbose message. Only printed to the terminal when --verbose is passed
   */
  verbose(msg: string, ...rest: any[]): void;
}

export const DEFAULT_LOG_LEVEL = 'info' as const;
export type LogLevel = typeof LEVELS[number];

export function pickLevelFromFlags(
  flags: Record<string, string | boolean | string[] | undefined>,
  options: { default?: LogLevel } = {}
) {
  if (flags.verbose) return 'verbose';
  if (flags.debug) return 'debug';
  if (flags.info) return 'info';
  if (flags.quiet) return 'error';
  if (flags.silent) return 'silent';
  return options.default || DEFAULT_LOG_LEVEL;
}

export const LOG_LEVEL_FLAGS = [
  {
    name: 'verbose',
    help: '--verbose, -v      Log verbosely',
  },
  {
    name: 'info',
    help: "--info             Don't log debug messages",
  },
  {
    name: 'debug',
    help: '--debug            Log debug messages (less than verbose)',
  },
  {
    name: 'quiet',
    help: '--quiet            Only log errors',
  },
  {
    name: 'silent',
    help: "--silent           Don't log anything",
  },
];

export function getLogLevelFlagsHelp(defaultLogLevel: string = DEFAULT_LOG_LEVEL) {
  return LOG_LEVEL_FLAGS.filter(({ name }) => name !== defaultLogLevel)
    .map(({ help }) => help)
    .join('\n');
}

export type ParsedLogLevel = ReturnType<typeof parseLogLevel>;

export function parseLogLevel(name: LogLevel) {
  const i = LEVELS.indexOf(name);

  if (i === -1) {
    const msg = `Invalid log level "${name}" ` + `(expected one of ${LEVELS.join(',')})`;
    throw new Error(msg);
  }

  const flags: { [key: string]: boolean } = {};
  LEVELS.forEach((level, levelI) => {
    flags[level] = levelI <= i;
  });

  return {
    name,
    flags: flags as { [key in LogLevel]: boolean },
  };
}

const { magentaBright, yellow, red, blue, green, dim } = chalk;
const PREFIX_INDENT = ' '.repeat(6);
const MSG_PREFIXES = {
  verbose: ` ${magentaBright('sill')} `,
  debug: ` ${dim('debg')} `,
  info: ` ${blue('info')} `,
  success: ` ${green('succ')} `,
  warning: ` ${yellow('warn')} `,
  error: `${red('ERROR')} `,
};

const has = <T extends object>(obj: T, key: any): key is keyof T => obj.hasOwnProperty(key);

export interface ToolingLogTextWriterConfig {
  /**
   * Log level, messages below this level will be ignored
   */
  level: LogLevel;
  /**
   * List of message sources/ToolingLog types which will be ignored. Create
   * a logger with `ToolingLog#withType()` to create messages with a specific
   * source. Ignored messages will be dropped without writing.
   */
  ignoreSources?: string[];
  /**
   * Target which will receive formatted message lines, a common value for `writeTo`
   * is process.stdout
   */
  writeTo: {
    write(s: string): void;
  };
}

function shouldWriteType(level: ParsedLogLevel, type: MessageTypes) {
  if (type === 'write') {
    return level.name !== 'silent';
  }

  return Boolean(level.flags[type === 'success' ? 'info' : type]);
}

function stringifyError(error: string | Error) {
  if (typeof error !== 'string' && !(error instanceof Error)) {
    error = new Error(`"${error}" thrown`);
  }

  if (typeof error === 'string') {
    return error;
  }

  return error.stack || error.message || error;
}

export class ToolingLogTextWriter implements Writer {
  public readonly level: ParsedLogLevel;
  public readonly writeTo: {
    write(msg: string): void;
  };
  private readonly ignoreSources?: string[];

  constructor(config: ToolingLogTextWriterConfig) {
    this.level = parseLogLevel(config.level);
    this.writeTo = config.writeTo;
    this.ignoreSources = config.ignoreSources;

    if (!this.writeTo || typeof this.writeTo.write !== 'function') {
      throw new Error(
        'ToolingLogTextWriter requires the `writeTo` option be set to a stream (like process.stdout)'
      );
    }
  }

  write(msg: Message) {
    if (!shouldWriteType(this.level, msg.type)) {
      return false;
    }

    if (this.ignoreSources && msg.source && this.ignoreSources.includes(msg.source)) {
      if (msg.type === 'write') {
        const txt = format(msg.args[0], ...msg.args.slice(1));
        // Ensure that Elasticsearch deprecation log messages from Kibana aren't ignored
        if (!/elasticsearch\.deprecation/.test(txt)) {
          return false;
        }
      } else {
        return false;
      }
    }

    const prefix = has(MSG_PREFIXES, msg.type) ? MSG_PREFIXES[msg.type] : '';
    ToolingLogTextWriter.write(this.writeTo, prefix, msg);
    return true;
  }

  static write(writeTo: ToolingLogTextWriter['writeTo'], prefix: string, msg: Message) {
    const txt =
      msg.type === 'error'
        ? stringifyError(msg.args[0])
        : format(msg.args[0], ...msg.args.slice(1));

    (prefix + txt).split('\n').forEach((line, i) => {
      let lineIndent = '';

      if (msg.indent > 0) {
        // if we are indenting write some spaces followed by a symbol
        lineIndent += ' '.repeat(msg.indent - 1);
        lineIndent += line.startsWith('-') ? '└' : '│';
      }

      if (line && prefix && i > 0) {
        // apply additional indentation to lines after
        // the first if this message gets a prefix
        lineIndent += PREFIX_INDENT;
      }

      writeTo.write(`${lineIndent}${line}\n`);
    });
  }
}

export type MessageTypes = 'verbose' | 'debug' | 'info' | 'success' | 'warning' | 'error' | 'write';

/**
 * The object shape passed to ToolingLog writers each time the log is used.
 */
export interface Message {
  /** level/type of message */
  type: MessageTypes;
  /** indentation intended when message written to a text log */
  indent: number;
  /** type of logger this message came from */
  source?: string;
  /** args passed to the logging method */
  args: any[];
}

export interface Writer {
  /**
   * Called with every log message, should return true if the message
   * was written and false if it was ignored.
   * @param msg The log message to write
   */
  write(msg: Message): boolean;
}

export interface ToolingLogOptions {
  /**
   * type name for this logger, will be assigned to the "source"
   * properties of messages produced by this logger
   */
  type?: string;
  /**
   * parent ToolingLog. When a ToolingLog has a parent they will both
   * share indent and writers state. Changing the indent width or
   * writers on either log will update the other too.
   */
  parent?: ToolingLog;
}

export class ToolingLog implements SomeDevLog {
  private indentWidth$: Rx.BehaviorSubject<number>;
  private writers$: Rx.BehaviorSubject<Writer[]>;
  private readonly written$: Rx.Subject<Message>;
  private readonly type: string | undefined;

  constructor(writerConfig?: ToolingLogTextWriterConfig, options?: ToolingLogOptions) {
    this.indentWidth$ = options?.parent ? options.parent.indentWidth$ : new Rx.BehaviorSubject(0);

    this.writers$ = options?.parent
      ? options.parent.writers$
      : new Rx.BehaviorSubject<Writer[]>([]);
    if (!options?.parent && writerConfig) {
      this.writers$.next([new ToolingLogTextWriter(writerConfig)]);
    }

    this.written$ = options?.parent ? options.parent.written$ : new Rx.Subject();
    this.type = options?.type;
  }

  /**
   * Get the current indentation level of the ToolingLog
   */
  public getIndent() {
    return this.indentWidth$.getValue();
  }

  /**
   * Indent the output of the ToolingLog by some character (4 is a good choice usually).
   *
   * If provided, the `block` function will be executed and once it's promise is resolved
   * or rejected the indentation will be reset to its original state.
   *
   * @param delta the number of spaces to increase/decrease the indentation
   * @param block a function to run and reset any indentation changes after
   */
  public indent(delta: number): void;
  public indent<T>(delta: number, block: () => Promise<T>): Promise<T>;
  public indent<T>(delta: number, block: () => T): T;
  public indent<T>(delta = 0, block?: () => T | Promise<T>): void | T | Promise<T> {
    const originalWidth = this.indentWidth$.getValue();
    this.indentWidth$.next(Math.max(originalWidth + delta, 0));
    if (!block) {
      return;
    }

    const maybePromise: any = block();
    if (
      typeof maybePromise === 'object' &&
      maybePromise &&
      typeof maybePromise.then === 'function'
    ) {
      return (async () => {
        try {
          return await maybePromise;
        } finally {
          this.indentWidth$.next(originalWidth);
        }
      })();
    }

    this.indentWidth$.next(originalWidth);
    return maybePromise;
  }

  public verbose(...args: any[]) {
    this.sendToWriters('verbose', args);
  }

  public debug(...args: any[]) {
    this.sendToWriters('debug', args);
  }

  public info(...args: any[]) {
    this.sendToWriters('info', args);
  }

  public success(...args: any[]) {
    this.sendToWriters('success', args);
  }

  public warning(...args: any[]) {
    this.sendToWriters('warning', args);
  }

  public error(error: Error | string) {
    this.sendToWriters('error', [error]);
  }

  public write(...args: any[]) {
    this.sendToWriters('write', args);
  }

  public getWriters() {
    return [...this.writers$.getValue()];
  }

  public setWriters(writers: Writer[]) {
    this.writers$.next([...writers]);
  }

  public getWritten$() {
    return this.written$.asObservable();
  }

  /**
   * Create a new ToolingLog which sets a different "type", allowing messages to be filtered out by "source"
   * @param type A string that will be passed along with messages from this logger which can be used to filter messages with `ignoreSources`
   */
  public withType(type: string) {
    return new ToolingLog(undefined, {
      type,
      parent: this,
    });
  }

  private sendToWriters(type: MessageTypes, args: any[]) {
    const indent = this.indentWidth$.getValue();
    const writers = this.writers$.getValue();
    const msg: Message = {
      type,
      indent,
      source: this.type,
      args,
    };

    let written = false;
    for (const writer of writers) {
      if (writer.write(msg)) {
        written = true;
      }
    }

    if (written) {
      this.written$.next(msg);
    }
  }
}

const sut = new ToolingLog();
sut.write('abc');
 