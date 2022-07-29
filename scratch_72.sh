# Original Archive
orig_archive="x-pack/test/functional/es_archives/reporting/sales"
# New Archive
x-pack/test/functional/fixtures/kbn_archiver/reporting/sales

find_usages() {
  find . -type f -print0 | xargs -0 grep -n $orig_archive | cut -d ':' -f 1|uniq
}

# load es and save kbn
standard_list="search,index-pattern,visualization,dashboard,lens,map,graph-workspace,query,tag,url,canvas-workpad"
es_archive_root="x-pack/test/functional/es_archives"
current_archive="${es_archive_root}/reporting/sales"
kbn_archive_root="x-pack/test/functional/fixtures/kbn_archiver"
node scripts/es_archiver.js load "${es_archive_root}/logstash_functional" \
--config x-pack/test/functional/config.js && \
node scripts/es_archiver.js load $current_archive \
--config x-pack/test/functional/config.js && \
node scripts/kbn_archiver.js --config x-pack/test/functional/config.js save \
"${kbn_archive_root}/reporting/sales" --type $standard_list

# Start server and test runner
test_config="x-pack/test/reporting_api_integration/reporting_and_security.config.ts"
test_grep="tre Reporting APIs"
start_server() {
 node scripts/functional_tests_server.js --config $test_config
}
run_test() {
  node scripts/functional_test_runner --config $test_config --grep='${test_grep}'
}
