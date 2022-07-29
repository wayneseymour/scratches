  OLDIFS="${IFS}"
  IFS=$'\n'

  content=$(
    cat <<-EOF
### Browse the the Code Coverage Static Site

${markdownLinks[*]}
EOF
  )
  IFS="${OLDIFS}"
