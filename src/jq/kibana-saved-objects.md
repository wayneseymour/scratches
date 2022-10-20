# Kibana Saved Object Usages of JQ

## See all the ID's
```
jq '[.value.id]| .[]' x-pack/test/functional/es_archives/security_solution/timelines/7.15.0_space/data.json
```

## See all the values for Index
```
jq '[.value.index]| .[]' x-pack/test/functional/es_archives/security_solution/timelines/7.15.0_space/data.json
```
