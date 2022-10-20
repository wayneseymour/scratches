export KIBANA_DIR=/dev/shm/builds/kb-c2-16-e30b4baf11b67c52/elastic/kibana-code-coverage-main/kibana
finalReplace() {
#  TODO-TRE: Drop hardcoded replacement anchor
#  sed -ie "s|$anchor|${KIBANA_DIR}|g" $targetPath
#  sed -i '' -e "s|LEETRE|/Users/tre/main|g" /Users/tre/main/target/kibana-coverage/functional/*.json
  sed -i '' -E "s|CC_REPLACEMENT_ANCHOR|${KIBANA_DIR}|g" target/kibana-coverage/jest/*.json
}
pushd ~/main >/dev/null

finalReplace
