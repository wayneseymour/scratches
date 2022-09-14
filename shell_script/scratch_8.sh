currentBuildNumber=563
url="https://kibana-stats.elastic.dev/app/discover#/?_g=(filters:!(),query:(language:kuery,query:''),refreshInterval:(pause:!t,value:0),time:(from:now-7d,to:now))&_a=(columns:!(),filters:!(),hideChart:!f,index:'64419790-4218-11ea-b2d8-81bcbf78dfcb',interval:auto,query:(language:kuery,query:'BUILD_ID%20:%20${currentBuildNumber}'),sort:!(!('@timestamp',desc)))"

echo "--- Browse the following url to visually verify:"
printf "%s \n" "$url"
