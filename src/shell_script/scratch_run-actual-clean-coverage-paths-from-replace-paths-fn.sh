pushd ~/main > /dev/null
source .buildkite/scripts/steps/code_coverage/util.sh

KIBANA_DIR=/Users/tre/main

replacePaths "$KIBANA_DIR/target/kibana-coverage/jest" "CC_REPLACEMENT_ANCHOR" "$KIBANA_DIR"

