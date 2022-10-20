standard_list="url,url,url,index-pattern,action,query,alert,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices"

_arrayify() {
  local xs=${1}
  echo "$xs" | tr ',' '\n' | uniq | sort
}
arrayify() {
  local commaSeparated=$1
  local xs=($(_arrayify "$commaSeparated"))
  for x in "${xs[@]}"; do
    echo "### x: ${x}"
  done
  echo "### #xs[@]: ${#xs[@]}"
}

arrayify "$standard_list"
