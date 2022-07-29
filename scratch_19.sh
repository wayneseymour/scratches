allowed_types='{
 "types": [
   {
     "name": "config",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "config"
   },
   {
     "name": "url",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "url"
   },
   {
     "name": "index-pattern",
     "namespaceType": "multiple",
     "hidden": false,
     "displayName": "data view"
   },
   {
     "name": "action",
     "namespaceType": "multiple-isolated",
     "hidden": true,
     "displayName": "connector"
   },
   {
     "name": "query",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "query"
   },
   {
     "name": "alert",
     "namespaceType": "multiple-isolated",
     "hidden": true,
     "displayName": "rule"
   },
   {
     "name": "graph-workspace",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "graph-workspace"
   },
   {
     "name": "tag",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "tag"
   },
   {
     "name": "visualization",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "visualization"
   },
   {
     "name": "canvas-element",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "canvas-element"
   },
   {
     "name": "canvas-workpad",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "canvas-workpad"
   },
   {
     "name": "dashboard",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "dashboard"
   },
   {
     "name": "search",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "search"
   },
   {
     "name": "lens",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "lens"
   },
   {
     "name": "map",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "map"
   },
   {
     "name": "cases",
     "namespaceType": "multiple-isolated",
     "hidden": true,
     "displayName": "cases"
   },
   {
     "name": "uptime-dynamic-settings",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "uptime-dynamic-settings"
   },
   {
     "name": "osquery-saved-query",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "osquery-saved-query"
   },
   {
     "name": "osquery-pack",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "osquery-pack"
   },
   {
     "name": "infrastructure-ui-source",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "infrastructure-ui-source"
   },
   {
     "name": "metrics-explorer-view",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "metrics-explorer-view"
   },
   {
     "name": "inventory-view",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "inventory-view"
   },
   {
     "name": "infrastructure-monitoring-log-view",
     "namespaceType": "multiple-isolated",
     "hidden": false,
     "displayName": "log view"
   },
   {
     "name": "apm-indices",
     "namespaceType": "single",
     "hidden": false,
     "displayName": "apm-indices"
   },
   {
     "name": "csp_rule",
     "namespaceType": "agnostic",
     "hidden": false,
     "displayName": "csp_rule"
   },
   {
     "name": "csp-rule-template",
     "namespaceType": "agnostic",
     "hidden": false,
     "displayName": "csp-rule-template"
   }
 ]
}'
_allowed_types() {
  echo "### allowed_types: ${allowed_types}"
}

VALUE=$(cat <<EOF
{
  "type": "account",
  "customer_id": "1234",
  "customer_email": "jim@gmail.com",
}
EOF
)
  echo "### VALUE: ${VALUE}"
  ECHO
