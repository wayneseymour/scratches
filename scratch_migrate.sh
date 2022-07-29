migrate() {
  set -x
  node scripts/es_archiver.js load "$orig_archive" --config "$test_config"
  node scripts/kbn_archiver.js save "$new_archive" --config "$test_config" --type "$standard_list"
  node scripts/es_archiver.js unload "$orig_archive"
  set +x
}

usages() {
  grep -q "x-pack" <<<"$orig_archive"
  exitCode=$?
  if [[ $exitCode = 0 ]]; then
    pushd x-pack
  fi
  set -x
  find . -type f -print0 | xargs -0 grep -n $orig_archive | cut -d ':' -f 1 | uniq
  set +x
  if [[ $exitCode = 0 ]]; then
    popd
  fi
}

load_logstash() {
  set -x
  node scripts/es_archiver.js load x-pack/test/functional/es_archives/logstash_functional --config $test_config
  set +x
}

load_es() {
  set -x
  node scripts/es_archiver.js load $orig_archive --config $test_config
  set +x
}

unload_es() {
  set -x
  node scripts/es_archiver.js unload $orig_archive
  set +x
}

save_es_archive_without_kibana_objects() {
  # pass the index name on the cli
  set -x
  node scripts/es_archiver.js save $orig_archive \
    --config $test_config $index_name
  set +x
}

save_kbn() {
  set -x
  node scripts/kbn_archiver.js --config $test_config save $new_archive --type $standard_list
  set +x
  #  node scripts/kbn_archiver.js --config x-pack/test/spaces_api_integration/security_and_spaces/config_basic.ts save x-pack/test/functional/fixtures/kbn_archiver/saved_objects/default_space --type search,index-pattern,visualization,dashboard,lens,map,graph-workspace,query,tag,url,canvas-workpad
}

load_kbn() {
  set -x
  node scripts/kbn_archiver.js --config $test_config load $new_archive
  set +x
}

load_created_kbn_archive() {
  set -x
  node scripts/kbn_archiver.js --config $test_config load $created_archive
  set +x
}

unload_kbn() {
  set -x
  node scripts/kbn_archiver.js --config $test_config unload $new_archive
  set +x
}

ping_server() {
  set -x
  server_addr="http://elastic:changeme@localhost:9220"
  curl -k "${server_addr}/_cat/health?v=true"
  set +x
}

server() {
  set -x
  node scripts/functional_tests_server.js --config $test_config
  set +x
}

run_test() {
  set -x
  node scripts/functional_test_runner --config "$test_config"
  set +x
}

run_test_extra() {
  set -x
  node scripts/functional_test_runner --config $test_config \
    --grep="CSV Generation from SearchSource" \
    --include-tag "ciGroup2" \
    --updateSnapshots
  set +x
}

lee() {
  for i in $(grep -rl '"index": ".kibana' x-pack/test/functional/es_archives | sort -u); do
    echo ${i%/*}
    node scripts/es_archiver.js load ${i%/*}
    #    curl 'http://localhost:9220/_cat/indices/*?v&expand_wildcards=all&h=index,docs.count' | grep -v apm | grep -v ds | grep -v task | grep -v event
    #    curl 'http://localhost:9220/.kibana/_search' | jq .hits.hits | grep _id
    #    curl 'http://elastic:changeme@localhost:9220/.kibana/_search' | jq .hits.hits | grep _id
    #    node scripts/kbn_archiver.js save x-pack/test/functional/fixtures/temp/${i%/*} --config x-pack/test/functional/config.base.js --type url,index-pattern,action,query,alert,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices
    #    node scripts/es_archiver.js empty-kibana-index
    #    node scripts/es_archiver.js unload ${i%/*}
    echo '-------------------------------------\n'
  done
}
