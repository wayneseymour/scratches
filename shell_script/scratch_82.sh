while getopts s: flag
do
    case "${flag}" in
        s) simulations=${OPTARG};;
        *) echo "incorrect argument, supported flags are: w, b, s"
    esac
done

IFS=',' read -ra sim_array <<< "${simulations}"
for i in "${sim_array[@]}"; do
  echo "i: $i"
done
