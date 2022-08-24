#!/bin/bash

standard_list="url,index-pattern,query,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices"

arrayify_csv() {
  local xs=${1}
  echo "$xs" | tr ',' '\n' | uniq | sort
}

declare -a standardListArr=()
# One Liner
while IFS='' read -r line; do standardListArr+=("$line"); done < <(arrayify_csv "$standard_list")
echo "### standardListArr[*]: ${standardListArr[*]}"

buildArrayFromCallingAnotherFunction() {
  local xs=()

  while IFS='' read -r x
  do
    xs+=("$x")
  done < <(arrayify_csv "$standard_list")

  echo "### xs[*]: ${xs[*]}"
}
buildArrayFromCallingAnotherFunction
