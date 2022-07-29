#!/usr/bin/env bash

# above loop
exitCode=0 # a FTR failure will result in the script returning an exit code of 10



# in loop
start=$(date +%s)
lastCode=99




# in loop, at the end
configResults () {
  timeSec=$(($(date +%s) - start))

  if [[ $timeSec -gt 60 ]]; then
    min=$((timeSec / 60))
    sec=$((timeSec - (min * 60)))
    duration="${min}m ${sec}s"
  else
    duration="${timeSec}s"
  fi

  results+=("- $config
      duration: ${duration}
      result: ${lastCode}")

  if [ $lastCode -ne 0 ]; then
    exitCode=10
    echo "FTR exited with code $lastCode"
    echo "^^^ +++"

    if [[ "$failedConfigs" ]]; then
      failedConfigs="${failedConfigs}"$'\n'"$config"
    else
      failedConfigs="$config"
    fi
  fi
}

configResults

# below loop

if [[ "$failedConfigs" ]]; then
  echo "### failedConfigs: ${failedConfigs}"
fi

echo "--- FTR configs complete"
printf "%s\n" "${results[@]}"
echo ""

# Force exit 0 to ensure the next build step starts.
exit 0
