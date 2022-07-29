uniqueifyFunctional() {
  local unique=${1:?"Must pass first positional arg for 'unique'"}
  # Drop the json files that where report-merged.
#  rm -rf target/kibana-coverage/functional/*

  # Move from report-merge target dir, to: target/kibana-coverage/functional
#  mv target/kibana-coverage/functional-combined/coverage-final.json \
#    "target/kibana-coverage/functional/$unique-coverage-final.json"
  echo "### unique: ${unique}"
}
uniqueifyFunctional "$(date +%s)"
