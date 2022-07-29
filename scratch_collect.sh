#!/usr/bin/env bash

collect () {
  local fileName=$1
  local dir=$2

  tar -czf "$fileName" "$dir"

#  buildkite-agent artifact upload "$fileName"

  printf "\n### %s Uploaded\n" "$fileName"
}

pushd ~/main >/dev/null

collect target/collect-functional-tre.tar.gz target/kibana-coverage/functional
tar -tf target/collect-functional-tre.tar.gz

