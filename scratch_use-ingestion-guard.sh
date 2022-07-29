#!/bin/bash

source /Users/tre/main/.buildkite/scripts/steps/code_coverage/reporting/guard.sh

pushd ~/main >/dev/null

guardIngestion
