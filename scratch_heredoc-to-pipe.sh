annotateForKibanaLinks() {
  local currentBuildNumber="$BUILDKITE_BUILD_NUMBER"
  local coverageUrl="https://kibana-stats.elastic.dev/app/discover#/?_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(columns:!(),filters:!(),hideChart:!f,index:'64419790-4218-11ea-b2d8-81bcbf78dfcb',interval:auto,query:(language:kuery,query:'BUILD_ID%20:%20${currentBuildNumber}'),sort:!(!('@timestamp',desc)))"
  local totalCoverageUrl="https://kibana-stats.elastic.dev/app/discover#/?_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(columns:!(),filters:!(),hideChart:!f,index:d78f9120-4218-11ea-b2d8-81bcbf78dfcb,interval:auto,query:(language:kuery,query:'BUILD_ID%20:%20${currentBuildNumber}'),sort:!(!('@timestamp',desc)))"

  cat <<EOF | buildkite-agent annotate --style "info" --context 'ctx-kibana-links'
### Browse the following url(s) to visually verify in Kibana

_Links are pinned to the current build number._

  - [Code Coverage]($coverageUrl)
  - [Total Code Coverage]($totalCoverageUrl)

EOF

}
