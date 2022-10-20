#orig_archive="x-pack/test/functional/es_archives/logstash/example_pipelines"
orig_archive="x-pack/test/functional/es_archives/spaces/disabled_features"
new_archive="x-pack/test/functional/fixtures/kbn_archiver/spaces/disabled_features"
test_config="x-pack/test/functional/apps/discover/config.ts"

_types() {
  local archiveJson=$1

  if [[ -f "$archiveJson" ]]; then
    #    jq '.value.source.type' $archiveJson
    jq 'select(.value.source.type | length > 0) | .value.source.type' $archiveJson
    git clean -f "$archiveJson" > /dev/null
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

pushd ~/main >/dev/null

types
