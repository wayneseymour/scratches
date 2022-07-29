#!/usr/bin/env bash

set -euo pipefail

header() {
  local fileName=$1

  echo "" >"$fileName"

  echo "### File Name:" >>"$fileName"
  printf "\t%s\n" $fileName >>"$fileName"
}

fileHeads() {
  local fileName=$1
  local dir=$2
  local ext=${3:-'*.json'}

  header $fileName

  while read -r x; do
    printf "\n### BEGIN %s\n\n" $x >>$fileName
    head -2 $x >>$fileName
    printf "\n### END %s\n\n" $x >>$fileName
  done <<<"$(find "$dir" -maxdepth 1 -type f -name "$ext")"

  #  buildkite-agent artifact upload "$fileName"
}

pushd ~/main >/dev/null
fileHeads "target/file-heads-functional-before-final-replace.txt" target/kibana-coverage/functional
open "target/file-heads-functional-before-final-replace.txt"

fileHeads "target/file-heads-ran-files.txt" target/ran_files '*.txt'
open "target/file-heads-ran-files.txt"
