standard_list="url,index-pattern,action,query,alert,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices"

orig_archive="x-pack/test/saved_object_api_integration/common/fixtures/es_archiver/saved_objects/spaces"

_has_intersection() {
  local containedTypes
  containedTypes=${1:?"You must pass the containedTypes or I cant search for an intersection"}
  local xs
  containedTypesArr=($(echo "$containedTypes" | tr ',' '\n'))
  standardListArr=($(echo "$standard_list" | tr ',' '\n'))
  for a in "${containedTypesArr[@]}"; do
    for b in "${standardListArr[@]}"; do
      echo "### a: ${a}"
      echo "### b: ${b}"
#      if [[ "$a" == "$b" ]]; then
#        echo "### We got a match!"
#      else
#        echo "### No match"
#      fi
    done
  done
}

should_migrate() {
  local archive=${1:-$orig_archive}
  local containedTypes=$(types "$archive" | sort | uniq)
  _has_intersection "$containedTypes"
}

should_migrate
