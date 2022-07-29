#!/usr/bin/env bash


header() {
  local fileName=$1

  echo "" >"$fileName"

  echo "### File Name:" >>"$fileName"
  printf "  %s\n\n" "$fileName" >>"$fileName"
}

# $1 file name, ex: "target/dir-listing-jest.txt"
# $2 directory to be listed, ex: target/kibana-coverage/jest
dirListing() {
  local fileName=$1
  local dir=$2

  header "$fileName"

  ls -l "$dir" >>"$fileName"

  printf "\n### %s \n\tlisted to: %s\n" "$dir" "$fileName"
#  buildkite-agent artifact upload "$fileName"

  printf "\n### %s Uploaded\n" "$fileName"
}

pushd ~/main > /dev/null
dirListing "target/dir-listing-tre.txt" target/kibana-coverage/functional
open "target/dir-listing-tre.txt"
