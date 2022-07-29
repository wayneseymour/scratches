delete_space() {
  local id=${1:?Need a space id.}

  curl -H "kbn-xsrf: archive-migration-functions" \
    -X DELETE -d "$payloadWithJqInjectedVars" \
    --user elastic:changeme http://localhost:5620/api/spaces/space/"$id"
}
