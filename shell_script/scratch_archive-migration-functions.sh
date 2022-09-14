standard_list="url,index-pattern,action,query,alert,graph-workspace,tag,visualization,canvas-element,canvas-workpad,dashboard,search,lens,map,cases,uptime-dynamic-settings,osquery-saved-query,osquery-pack,infrastructure-ui-source,metrics-explorer-view,inventory-view,infrastructure-monitoring-log-view,apm-indices"

orig_archive="x-pack/test/functional/es_archives/banners/multispace"
new_archive="x-pack/test/functional/fixtures/kbn_archiver/banners/multispace"
test_config="x-pack/test/functional/apps/spaces/config.ts"

arrayify_csv() {
  local xs=${1}
  echo "$xs" | tr ',' '\n' | uniq | sort
}

has_intersection() {
  local containedTypes=${1:?"You must pass the containedTypes or I cant search for an intersection"}

  local containedTypesArr=($(arrayify_csv "$containedTypes"))
  local standardListArr=($(arrayify_csv "$standard_list"))

  intersections=()

  for a in "${containedTypesArr[@]}"; do
    for b in "${standardListArr[@]}"; do
      if [[ "$a" == "$b" ]]; then
        intersections+=("$a")
      fi
    done
  done
}

_types() {
  local archiveJson=$1

  if [[ -f "$archiveJson" ]]; then
    local typesList=$(jq 'select(.value.source.type | length > 0) | .value.source.type' $archiveJson)
    echo "$typesList" | sed 's/^.//;s/.$//' | sort | uniq
  fi
}

types() {
  local archive=${1:-$orig_archive}
  local archiveJson="${archive}/data.json"

  if [[ ! -f "$archiveJson" ]]; then
    local zip=$(find "$archive" -maxdepth 1 -type f -name '*.gz')
    gunzip --keep "$zip"
  fi

  _types $archiveJson
}

isZipped() {
  local archive=$1

  local zip=$(find "$archive" -maxdepth 1 -type f -name '*.gz' 2>/dev/null)
  if [[ "$zip" == "" ]]; then
    echo ""
  else
    echo "$zip"
  fi
}

unzip_and_keep() {
  local archive=$1

  local zip=$(find "$archive" -maxdepth 1 -type f -name '*.gz')
  gunzip --keep "$zip"
}

should_migrate() {
  local archive=${1:-$orig_archive}
  local archiveJson="${archive}/data.json"
  printf "Should we migrate \n    %s\n" "$archive"

  if [[ ! -d "$archive" ]]; then
    echo "    !!! Archive does not exist: $archive"
    return 1
  fi

  local zipped=$(isZipped "$archive")
  if [[ "$zipped" != "" ]]; then
    unzip_and_keep "$archive"
  fi

  local containsDotKibanaRefs=$(grep -i '"index": ".kibana' "$archiveJson")
  if [[ "$containsDotKibanaRefs" == "" ]]; then
    printf "### No, .kibana is not mentioned within the archive: \n  %s" "$archive"
    return 1
  fi

  local containedTypes=$(types "$archive")
  has_intersection "$containedTypes"
  local intersectionsLength="${#intersections[@]}"
  if [ ${intersectionsLength} -gt 0 ]; then
    echo "### Well, we've found $intersectionsLength matches, but we need to check usages..."
    usages "$archive"
  else
    echo "### No, we've found $intersectionsLength saved objects that are listed in the standard_list"
  fi
}

usages() {
  local archive=${1:-$orig_archive}

  printf "### Searching for uses of: \n  %s\n" "$archive"

  grep -q "x-pack" <<<"$archive"
  exitCode=$?

  if [[ $exitCode = 0 ]]; then pushd x-pack; fi
  find . -type f -print0 | xargs -0 grep -n $archive | cut -d ':' -f 1 | uniq
  if [[ $exitCode = 0 ]]; then popd; fi
}

_find_config() {
  local test_file=${1}

  printf "### Searching for config of this test file: \n  %s\n" "$test_file"

  local current=$(dirname "$test_file")
  local parent=$(dirname "$current")
  local grandParent=$(dirname "$parent")
  local greatGrand=$(dirname "$grandParent")

  for x in "$current" "$parent" "$grandParent" "$greatGrand"; do
    if [[ -f "${x}/config.ts" || -f "${x}/config.js" ]]; then
      printf "  ### Config found in: \n    %s\n" "$x"
    fi
  done

}

find_configs() {
  local xs=("$@")

  for x in "${xs[@]}"; do
    _find_config "$x"
  done
}

usages_list() {
  local archive=${1:-$orig_archive}

  printf "### Searching for uses of: \n  %s\n" "$archive"

  grep -q "x-pack" <<<"$archive"
  isInXpack=$?

  local found_usages=()

  if [[ $isInXpack = 0 ]]; then
    found_usages+=($(find x-pack -type f -print0 | xargs -0 grep -n "$archive" | cut -d ':' -f 1 | uniq))
  else
    found_usages+=($(find . -type f -print0 | xargs -0 grep -n "$archive" | cut -d ':' -f 1 | uniq))
  fi
  printf "    ### Found %d usages\n" ${#found_usages[@]}

  find_configs ${found_usages[@]}
}

pushd ~/main >/dev/null
#should_migrate x-pack/test/saved_object_api_integration/common/fixtures/es_archiver/saved_objects/spaces
#types x-pack/test/functional/es_archives/lists
#usages x-pack/test/functional/es_archives/lists
#should_migrate x-pack/test/functional/es_archives/lists
#should_migrate abc
#usages_list x-pack/test/saved_object_tagging/common/fixtures/es_archiver/bulk_assign
#find_config x-pack/test/saved_object_tagging/api_integration/tagging_api/apis/bulk_assign.ts
tmp=(x-pack/test/saved_object_tagging/api_integration/tagging_api/apis/bulk_assign.ts x-pack/test/saved_object_tagging/api_integration/security_and_spaces/apis/bulk_assign.ts x-pack/test/saved_object_tagging/functional/tests/bulk_assign.ts)
find_configs "${tmp[@]}"

#types x-pack/test/functional/es_archives/lens/reporting
#should_migrate x-pack/test/functional/es_archives/lists
#types x-pack/test/saved_object_tagging/common/fixtures/es_archiver/bulk_assign
#should_migrate x-pack/test/saved_object_tagging/common/fixtures/es_archiver/bulk_assign
#types x-pack/test/saved_object_api_integration/common/fixtures/es_archiver/saved_objects/spaces
#should_migrate x-pack/test/saved_object_api_integration/common/fixtures/es_archiver/saved_objects/spaces
