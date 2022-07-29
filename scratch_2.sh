#!/bin/bash

xs=("$@")


uploadBase() {
  for x in 'src/dev/code_coverage/www/index.html' 'src/dev/code_coverage/www/404.html'; do
#    gsutil -m -q cp -r -a public-read -z js,css,html ${x} ${uploadPrefix}
    echo "gsutil -m -q cp -r -a public-read -z js,css,html ${x} ${uploadPrefix}"
  done
}

uploadRest() {
  for x in "${xs[@]}"; do
    echo "gsutil -m -q cp -r -a public-read -z js,css,html target/kibana-coverage/${x}-combined ${uploadPrefixWithTimeStamp}"
  done
}

pushd ~/main > /dev/null

uploadBase
uploadRest
