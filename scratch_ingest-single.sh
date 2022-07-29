types=()
types+=('jest')
types+=('functional')
revolveBuildHashes
annotateForStaticSite "${types[@]}"
source .buildkite/scripts/steps/code_coverage/reporting/ingestData.sh 'elastic+kibana+code-coverage' \
  "${BUILDKITE_BUILD_NUMBER}" "${BUILDKITE_BUILD_URL}" "${PREVIOUS_SHA}" \
  'src/dev/code_coverage/ingest_coverage/team_assignment/team_assignments.txt'
annotateForKibanaLinks