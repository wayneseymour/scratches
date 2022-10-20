GET web_traffic/_mapping
```json
{
  "web_traffic" : {
    "mappings" : {
      "properties" : {
        "@timestamp" : {
          "type" : "date"
        },
        "bytes_sent" : {
          "type" : "long"
        },
        "content_type" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "geoip_location_lat" : {
          "type" : "float"
        },
        "geoip_location_lon" : {
          "type" : "float"
        },
        "is_https" : {
          "type" : "boolean"
        },
        "request" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "response" : {
          "type" : "long"
        },
        "runtime_ms" : {
          "type" : "long"
        },
        "user_Agent" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        },
        "verb" : {
          "type" : "text",
          "fields" : {
            "keyword" : {
              "type" : "keyword",
              "ignore_above" : 256
            }
          }
        }
      }
    }
  }
}

```
