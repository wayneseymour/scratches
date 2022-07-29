markdownLinks=()
annotateForStaticSite() {
  local xs=("$@")

  for x in "${xs[@]}"; do
    markdownLinks+=(" - [$x](https://kibana-coverage.elastic.dev/${TIME_STAMP}/${x}-combined/index.html)")
  done

  OLDIFS="${IFS}"
  IFS=$'\n'

  content=$(
    cat <<- EOF
### Browse the the Code Coverage Static Site

${markdownLinks[*]}
EOF
  )
  IFS="${OLDIFS}"

  buildkite-agent annotate --style "info" --context 'ctx-info' "${content}"

}

types=()
types+=('jest')
types+=('functional')

annotateForStaticSite "${types[@]}"

