do-something-complex() {
  # Using `return` here would only return from `fail`, not from `do-something-complex`.
  # Using `exit` would close the entire shell.
  # So we (ab)use a different feature. :)
  fail() { : "${__fail_fast:?$1}"; }

  nested-func() {
      try-this || fail "This didn't work"
      try-that || fail "That didn't work"
  }
  nested-func
}

do-something-complex



    local config=$(find "$x" -maxdepth 1 -type f -name 'config.js' -or -name 'config.ts')
    echo "### config: ${config}"
#    if [ -n "$config"]; then
#      printf "  ### Config found in: \n    %s\n" "$x"
#      echo "*** Time to discover if $x is in the enabled list or not"
#    fi
