type PossibleLogDirNames = "log" | "logs" | "appex-qa-team-is-awesome";
type RelativeLogDirectoryName =
  `test/functional/apps/is_es_archiver_slow/${PossibleLogDirNames}`;

const x: RelativeLogDirectoryName = 'abc'
