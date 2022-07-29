checkForUnsetOrNull () {
  echo "  ### Check for unset or null of the name variable"
 if [[ "${name:-}" ]]; then
   echo "\t### name is not unset and it is not null"
   echo "\t### name: ${name}"
 else
   echo "\t!!! name is unset or null"
 fi
}
name=tre
checkForUnsetOrNull
unset name
echo "*** Unset name variable"
checkForUnsetOrNull


