filename=".buildkite/scripts/steps/code_coverage/data_retention/test_dirs_file.txt"
#filename=".buildkite/scripts/steps/code_coverage/data_retention/2020_dirs_file.txt"
#filename=".buildkite/scripts/steps/code_coverage/data_retention/2021_dirs_file.txt"

bucket="gs://elastic-bekitzur-kibana-coverage-live"

truncate() {
  while read line; do
    echo "### Truncating $line"
#    gsutil -m rm -r "$bucket/$line" &
    gsutil ls  "$bucket/$line" &
    #  gsutil ls gs://elastic-bekitzur-kibana-coverage-live/$line
  done <$filename
}

