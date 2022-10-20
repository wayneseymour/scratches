for summary in /Users/tre/main/empty-coverage-summary.json /Users/tre/main/non-empty-coverage-summary.json; do (
  echo "### summary: "${summary}""
  grep "Unknown" "$summary" > /dev/null
  lastCode=$?

  if [ $lastCode -eq 0 ]; then
    echo "  ### Empty Summary File: $summary"
  fi
); done
