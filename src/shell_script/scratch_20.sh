standard_list="url,index-pattern,action,query,alert,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices"

orig_archive="x-pack/test/functional/es_archives/banners/multispace"
new_archive="x-pack/test/functional/fixtures/kbn_archiver/banners/multispace"
test_config="x-pack/test/banners_functional/config.ts"

arrayify_csv() {
  local xs=${1}
  echo "$xs" | tr ',' '\n' | uniq | sort
}



trap arrayify_csv 0

arrayify_csv "$standard_list"
