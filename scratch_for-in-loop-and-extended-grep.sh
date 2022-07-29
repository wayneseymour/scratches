for summary in /Users/tre/main/empty-coverage-summary.json /Users/tre/main/non-empty-coverage-summary.json; do (
  echo "### summary: ${summary}"
  front=$(head -5 "$summary")
  echo $front | grep -E -i "pct.+Unknown" > /dev/null
  lastCode=$?

  if [ $lastCode -eq 0 ]; then
    echo "  ### Empty Summary File: $summary"
  fi
); done
