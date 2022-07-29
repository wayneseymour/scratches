uploadRanFile() {
  local ran=$1

  mkdir -p target/ran_files

  local fileName="target/ran_files/$ran.txt"

  echo "$ran" >"$fileName"

  #  buildkite-agent artifact upload $fileName
}

pushd ~/main >/dev/null

uploadRanFile "jest_integration"

uploadRanFile "jest"

uploadRanFile "ftr_configs"


