# The syntax is like this:
# ${var%pattern}
# ${var%%pattern}


FILE="xcache-1.3.0.tar.gz"
echo "${FILE%.tar.gz}"

a="test/functional/fixtures/es_archiver/saved_objects_management/export_exclusion/mappings.json"
echo "### a, normal: ${a}"
echo "### a, pattern removed: ${a%/mappings.json}"
