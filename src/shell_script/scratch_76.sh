curl -XGET "http://2703bb5c492e4ac89d2fc669c673685e.containerhost:9244/kibana_code_coverage/_search" -H 'Content-Type: application/json' -d'
{
  "size": 0,
  "aggs": {
    "how many docs have which test runner": {
      "terms": {
        "field": "testRunnerType.keyword"
      }
    }
  }
}'
