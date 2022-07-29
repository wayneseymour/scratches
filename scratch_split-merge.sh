base=target/kibana-coverage
target="$base/functional"
first="$target/first"
rest="$target/rest"

splitMerge() {
  echo "--- Merge the both halves of the coverage files into target/kibana-coverage/functional-combined"

  yarn nyc merge target/kibana-coverage/functional/first target/kibana-coverage/functional/first.json
  yarn nyc merge target/kibana-coverage/functional/rest target/kibana-coverage/functional/rest.json
#  sed -i '' -e "s|TREZKIBANADIR|/Users/tre/main|g" target/kibana-coverage/functional/*.json
  #  echo "--- Merge the rest of the coverage files"
  yarn nyc report --nycrc-path src/dev/code_coverage/nyc_config/nyc.functional.config.js

}

pushd ~/main
pwd

splitMerge
