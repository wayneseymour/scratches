heredocTest() {
  if true; then
    cat <<-"END"
        Hello
        World
END
  fi
}
#heredocTest

heredocTest2() {
  VAR=$(
    cat <<END_HEREDOC
abc'asdf"
adfadsfas
foo"bar"'
END_HEREDOC
  )
  echo "### VAR: ${VAR}"
}
#heredocTest2

  types=()
  types+=('jest')
  types+=('functional')

heredocTest3() {
  OLDIFS="${IFS}"
  IFS=$'\n'

  message=$(cat <<- EOF
  Test data:
  Test data 1:
  ${types[*]}
EOF
)

  IFS="${OLDIFS}"

  echo "$message"
}
heredocTest3
