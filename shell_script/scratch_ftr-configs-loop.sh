dasherize() {
  withoutExtension=${1%.*}
  dasherized=$(echo "$withoutExtension" | tr '\/' '\-')
}

configs=(
          "test/functional/apps/visualize/group5/config.ts",
          "x-pack/test/upgrade_assistant_integration/config.js"
        )
iterateConfigs() {
  xs=${1}
  while read -r config; do
    dasherize "$config"
    echo "### dasherized: ${dasherized}"
  done <<<$xs
}
iterateConfigs "$configs"
