uniqueify() {
  local xs=("$@")
  local xss=()
  for x in $(printf "%s\n" "${xs[@]}" | sort -u); do
    if [[ -n "$x" ]]; then
      xss+=("$x")
    fi
  done
  echo "${xss[@]}"
}

list=()
list+=("a")
list+=("a")
list+=("b")
list+=("")
list+=("c")
list+=("")
list+=("c")
list+=("c")
list+=("z")
list+=("z")
list+=("z")

echo "### list[@]: ${list[@]}"
echo "### #list[@]: ${#list[@]}"
#uniqueify "${list[@]}"
uniqList=($(uniqueify "${list[@]}"))
echo "### uniqList[@]: ${uniqList[@]}"
echo "### #uniqList[@]: ${#uniqList[@]}"
