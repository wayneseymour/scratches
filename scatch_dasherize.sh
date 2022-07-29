
dasherize () {
 withoutExtension=${1%.*}
 dasherized=$(echo "$withoutExtension" | tr '\/' '\-')
}
dasherize "test/functional/apps/dashboard/group2/config.ts"

echo "### dasherized: ${dasherized}"
