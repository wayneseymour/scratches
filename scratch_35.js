
const assignTeam = (teamAssignmentsPath, coveredFilePath, log, obj) =>
  Task.fromPromised(opts =>  execa('grep', [coveredFilePath, teamAssignmentsPath], opts))({ cwd: ROOT_DIR })
    .fork(
      () => {
        Maybe.fromNullable(process.env.LOG_NOT_FOUND)
          .map(() => log.error(`\n${ccMark} Unknown Team for path: \n\t\t${pink(coveredFilePath)}\n`))
        return { team: 'unknown', ...obj };
      },
      grepSuccess =>
        Maybe(grepSuccess)
          .map(pluckIndex('stdout'))
          .map(pipe(last, findTeam, pluckTeam))
          .map((team) => ({ team, ...obj }))
    );
