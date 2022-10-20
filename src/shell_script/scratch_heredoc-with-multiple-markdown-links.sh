pushd ~/main

types=()
types+=('jest')
types+=('functional')

TIME_STAMP=$(date +%s%3N)

markdownLinks=()

buildMdLinks() {
  local xs=("$@")
  local len=${#xs[@]}

  OLDIFS="${IFS}"
  IFS=$'\n'

  for x in "${xs[@]}"; do
    markdownLinks+=(" - [$x](https://kibana-coverage.elastic.dev/${TIME_STAMP}/${x}-combined/index.html)")
  done

  content=$(
    cat <<-EOF
### Browse the the Code Coverage Static Site

${markdownLinks[*]}
EOF
  )
  echo "### content:"
  echo "${content}"

  IFS="${OLDIFS}"
}

annotateForStaticSite() {
  local xs=("$@")
  local len=${#xs[@]}

  if [[ $len -eq 2 ]]; then
    content=$(
      cat <<END_HEREDOC
    abc'asdf"
    adfadsfas
    foo"bar"'
END_HEREDOC
    )
  else

  fi

  cat <<EOF >md-links.md
      ### Browse the following url(s) for the Code Coverage Static Site
        - [$x](https://kibana-coverage.elastic.dev/${TIME_STAMP}/${x}-combined/index.html)"
EOF
}

buildMdLinks "${types[@]}"
#echo "### markdownLinks: ${markdownLinks[@]}"
#annotateForStaticSite "${types[@]}"
#cat md-links.md

popd
