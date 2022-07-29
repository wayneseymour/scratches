_find_config() {
  local test_file=${1}
  echo "  ### finding config for test_file: ${test_file}"

  local current
  local parent
  local grandParent
  local greatGrand
  current=$(dirname "$test_file")
  parent=$(dirname "$current")
  grandParent=$(dirname "$parent")
  greatGrand=$(dirname "$grandParent")

  local dirs=("$current" "$parent" "$grandParent" "$greatGrand")

  local configs=()
  for x in "${dirs[@]}"; do
    echo "### x: ${x}"
    #    local config=$(find "$x" -maxdepth 1 -type f -name '*.config.js' -or -name '*.config.ts')
    #    echo "    ### config: ${config}"
    #    if [[ -n "$config" ]]; then
    #      echo "      ### good config: ${config}"
    #      configs+=("$config")
    #    fi
  done

  #  echo "${configs[@]}"
}

pushd ~/main

xs=([1]=x-pack/test/functional/apps/home/feature_controls/home_security.ts [2]=x-pack/test/functional/apps/dashboard/group1/feature_controls/dashboard_security.ts [3]=x-pack/test/functional/apps/dashboard/group1/feature_controls/time_to_visualize_security.ts)
echo ${xs[@]}
for x in "${xs[*]}"; do
#  _find_config "$x"
  echo "### x: ${x}"
done

for val in ${!xs[@]}
do
   echo "index = ${val} , value = ${xs[$val]}"
done
