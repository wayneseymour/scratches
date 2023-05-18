#!/bin/bash

set -euo pipefail

# I need to to parse through, looking in all the names[] to find
# `x-pack/test/alerting_api_integration/security_and_spaces/group2/config_non_dedicated_task_runner.ts`

# jq '.[] | select( .title | contains("x-pack/test/alerting_api_integration/security_and_spaces/group2/config_non_dedicated_task_runner.ts" ))' ./ftr_run_order.json
jq '.[] | select( .title | contains("x-pack/test/alerting_api_integration/security_and_spaces/group2/config_non_dedicated_task_runner.ts" ))' ./latest.json
