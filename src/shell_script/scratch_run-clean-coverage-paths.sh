pushd ~/main > /dev/null

printf "### Final replace for jest\n\n"
KIBANA_DIR=/dev/shm/builds/kb-c2-16-118ed5dec230f403/elastic/kibana-code-coverage-main/kibana
#gsed -ie "s|CC_REPLACEMENT_ANCHOR|${KIBANA_DIR}|g" target/kibana-coverage/jest/*.json
#
#node "/Users/tre/Library/Application Support/JetBrains/IntelliJIdea2022.1/scratches/scratch_clean-coverage-paths.js" \
#  "/Users/tre/main/target/kibana-coverage/jest/jest-merged-coverage-1653467252155.json" \
#  "CC_REPLACEMENT_ANCHOR" \
#  "$KIBANA_DIR"

printf "### from cc to kib dir\n\n"
ccToKib="/Users/tre/Library/Application Support/JetBrains/IntelliJIdea2022.1/scratches/scratch_dirty-coverage-paths1.json"
ccToKibOriginal=$(cat "$ccToKib")
#echo $ccToKibOriginal
node "/Users/tre/Library/Application Support/JetBrains/IntelliJIdea2022.1/scratches/scratch_clean-coverage-paths.js" \
  "$ccToKib" \
  "CC_REPLACEMENT_ANCHOR" \
  "$KIBANA_DIR"


printf "\n\n### from kib dir to cc\n\n"
kibToCC="/Users/tre/Library/Application Support/JetBrains/IntelliJIdea2022.1/scratches/scratch_dirty-coverage-paths2.json"
kibToCCOriginal=$(cat "$kibToCC")
#echo $kibToCCOriginal
node "/Users/tre/Library/Application Support/JetBrains/IntelliJIdea2022.1/scratches/scratch_clean-coverage-paths.js" \
  "$kibToCC" \
  "$KIBANA_DIR" \
  "CC_REPLACEMENT_ANCHOR"

echo "### Replace both"
