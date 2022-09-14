#!/bin/bash

pushd ~/main >/dev/null

collectRan() {
  while read -r x; do
    ran=("${ran[@]}" "$(cat "$x")")
  done <<<"$(find target/ran_files -maxdepth 1 -type f -name '*.txt')"
  echo "--- Ran files: ${ran[*]}"
}

uniqueifyRanConfigs() {
  local xs=("$@")
  xss=$(printf "%s\n" "${xs[@]}" | sort -u | tr '\n' ' ' | xargs)
  uniqRanConfigs=("$xss")
  echo "--- Uniq Ran files: ${uniqRanConfigs[*]}"
}

fetchArtifacts() {
  local xs=("$@")

  for x in "${xs[@]}"; do
    echo "### buildkite-agent artifact download target/kibana-coverage/${x}/* ."
  done
}

archiveReports() {
  echo "--- Archive and upload combined reports"

  local xs=("$@")
  for x in "${xs[@]}"; do
    echo "### Collect and Upload for: ${x}"
    #    collectAndUpload "target/kibana-coverage/${x}/kibana-${x}-coverage.tar.gz" "target/kibana-coverage/${x}-combined"
  done
}

modularize() {
  echo "buildkite-agent artifact download target/ran_files/* ."

  if [ -d target/ran_files ]; then
    collectRan
    uniqueifyRanConfigs "${ran[@]}"
    fetchArtifacts "${uniqRanConfigs[@]}"
    archiveReports "${uniqRanConfigs[@]}"
  else
    echo "--- Found zero configs that ran"
    exit 11
  fi
}
modularize
