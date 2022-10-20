./test/functional/apps/discover/preserve_url.ts
./test/functional/apps/visualize/preserve_url.ts
./test/functional/apps/dashboard/group1/preserve_url.ts


Migrated 3 from 9 saved objects :(


Need a script to convert ndjson to json, so I can use jq to parse it.



 ~/main   migrations/global_search-search_syntax ±  docker container start 90c08edaa634 -ai


[2022-06-17T11:50:31.700+00:00][INFO ][plugins-service] Plugin "cloudSecurityPosture" is disabled.
[2022-06-17T11:50:31.751+00:00][INFO ][plugins-service] Plugin "metricsEntities" is disabled.
[2022-06-17T11:50:31.852+00:00][INFO ][http.server.Preboot] http server running at http://0.0.0.0:5601
[2022-06-17T11:50:31.903+00:00][INFO ][plugins-system.preboot] Setting up [1] plugins: [interactiveSetup]
[2022-06-17T11:50:31.947+00:00][WARN ][config.deprecation] The default mechanism for Reporting privileges will work differently in future versions, which will affect the behavior of this cluster. Set "xpack.reporting.roles.enabled" to "false" to adopt the future behavior before upgrading.
[2022-06-17T11:50:32.173+00:00][INFO ][plugins-system.standard] Setting up [117] plugins: [translations,monitoringCollection,licensing,globalSearch,globalSearchProviders,features,mapsEms,licenseApiGuard,usageCollection,taskManager,telemetryCollectionManager,telemetryCollectionXpack,kibanaUsageCollection,share,embeddable,uiActionsEnhanced,screenshotMode,screenshotting,banners,newsfeed,fieldFormats,expressions,eventAnnotation,dataViews,charts,esUiShared,bfetch,data,savedObjects,presentationUtil,expressionShape,expressionRevealImage,expressionRepeatImage,expressionMetric,expressionImage,customIntegrations,home,searchprofiler,painlessLab,grokdebugger,management,watcher,advancedSettings,spaces,security,savedObjectsTagging,reporting,lists,fileUpload,ingestPipelines,encryptedSavedObjects,dataEnhanced,cloud,snapshotRestore,telemetry,licenseManagement,eventLog,actions,alerting,triggersActionsUi,transform,stackAlerts,ruleRegistry,savedObjectsManagement,console,controls,graph,fleet,indexManagement,remoteClusters,crossClusterReplication,indexLifecycleManagement,visualizations,canvas,visTypeXy,visTypeVislib,visTypeVega,visTypeTimeseries,rollup,visTypeTimelion,visTypeTagcloud,visTypeTable,visTypeMetric,visTypeHeatmap,visTypeMarkdown,dashboard,dashboardEnhanced,expressionXY,expressionTagcloud,expressionPartitionVis,visTypePie,expressionMetricVis,expressionHeatmap,expressionGauge,visTypeGauge,dataViewFieldEditor,sharedUX,discover,lens,osquery,maps,dataVisualizer,ml,cases,timelines,sessionView,securitySolution,observability,uptime,infra,upgradeAssistant,monitoring,logstash,enterpriseSearch,apm,discoverEnhanced,dataViewManagement]
[2022-06-17T11:50:32.190+00:00][INFO ][plugins.taskManager] TaskManager is identified by the Kibana UUID: da088f02-d252-4694-8f29-de531f900b58
[2022-06-17T11:50:32.336+00:00][WARN ][plugins.security.config] Generating a random key for xpack.security.encryptionKey. To prevent sessions from being invalidated on restart, please set xpack.security.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.336+00:00][WARN ][plugins.security.config] Session cookies will be transmitted over insecure connections. This is not recommended.
[2022-06-17T11:50:32.364+00:00][WARN ][plugins.security.config] Generating a random key for xpack.security.encryptionKey. To prevent sessions from being invalidated on restart, please set xpack.security.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.365+00:00][WARN ][plugins.security.config] Session cookies will be transmitted over insecure connections. This is not recommended.
[2022-06-17T11:50:32.386+00:00][WARN ][plugins.reporting.config] Generating a random key for xpack.reporting.encryptionKey. To prevent sessions from being invalidated on restart, please set xpack.reporting.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.388+00:00][WARN ][plugins.reporting.config] Found 'server.host: "0.0.0.0"' in Kibana configuration. Reporting is not able to use this as the Kibana server hostname. To enable PNG/PDF Reporting to work, 'xpack.reporting.kibanaServer.hostname: localhost' is automatically set in the configuration. You can prevent this message by adding 'xpack.reporting.kibanaServer.hostname: localhost' in kibana.yml.
[2022-06-17T11:50:32.398+00:00][WARN ][plugins.encryptedSavedObjects] Saved objects encryption key is not set. This will severely limit Kibana functionality. Please set xpack.encryptedSavedObjects.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.417+00:00][WARN ][plugins.actions] APIs are disabled because the Encrypted Saved Objects plugin is missing encryption key. Please set xpack.encryptedSavedObjects.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.439+00:00][WARN ][plugins.alerting] APIs are disabled because the Encrypted Saved Objects plugin is missing encryption key. Please set xpack.encryptedSavedObjects.encryptionKey in the kibana.yml or use the bin/kibana-encryption-keys command.
[2022-06-17T11:50:32.460+00:00][INFO ][plugins.ruleRegistry] Installing common resources shared between all indices
[2022-06-17T11:50:33.210+00:00][INFO ][plugins.screenshotting.config] Chromium sandbox provides an additional layer of protection, and is supported for Linux Ubuntu 20.04 OS. Automatically enabling Chromium sandbox.
[2022-06-17T11:50:33.272+00:00][ERROR][elasticsearch-service] Unable to retrieve version information from Elasticsearch nodes. connect ECONNREFUSED 172.18.0.2:9200
[2022-06-17T11:50:34.124+00:00][INFO ][plugins.screenshotting.chromium] Browser executable: /usr/share/kibana/x-pack/plugins/screenshotting/chromium/headless_shell-linux_x64/headless_shell



-----------------------------------------------------------------------------------------------------------------------------------------------
-> Elasticsearch security features have been automatically configured!
-> Authentication is enabled and cluster connections are encrypted.

->  Password for the elastic user (reset with `bin/elasticsearch-reset-password -u elastic`):
  J42B9gATVmD8N8H11+ad


->  HTTP CA certificate SHA-256 fingerprint:
  c62df3e367c66cdf4d5beb222a06e7f9e4fb7a30099c716b31e79ff14b0f4f69

->  Configure Kibana to use this cluster:
* Run Kibana and click the configuration link in the terminal when Kibana starts.
* Copy the following enrollment token and paste it into Kibana in your browser (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjIuMiIsImFkciI6WyIxNzIuMTguMC4yOjkyMDAiXSwiZmdyIjoiYzYyZGYzZTM2N2M2NmNkZjRkNWJlYjIyMmEwNmU3ZjllNGZiN2EzMDA5OWM3MTZiMzFlNzlmZjE0YjBmNGY2OSIsImtleSI6IjdPLUVjWUVCaTJlM2dnYl9UeVI0OnFhM3NrRGM0U1dHb1NHb3pFZEdKaEEifQ==

-> Configure other nodes to join this cluster:
* Copy the following enrollment token and start new Elasticsearch nodes with `bin/elasticsearch --enrollment-token <token>` (valid for the next 30 minutes):
  eyJ2ZXIiOiI4LjIuMiIsImFkciI6WyIxNzIuMTguMC4yOjkyMDAiXSwiZmdyIjoiYzYyZGYzZTM2N2M2NmNkZjRkNWJlYjIyMmEwNmU3ZjllNGZiN2EzMDA5OWM3MTZiMzFlNzlmZjE0YjBmNGY2OSIsImtleSI6Ijd1LUVjWUVCaTJlM2dnYl9UeVI2Om1zMUJWRTZLU2ZhVjA1OE1vNm9SY2cifQ==

  If you're running in Docker, copy the enrollment token and run:
  `docker run -e "ENROLLMENT_TOKEN=<token>" docker.elastic.co/elasticsearch/elasticsearch:8.2.2`
-----------------------------------------------------------------------------------------------------------------------------------------------


# NDJSON to JSON Regex
search: ^\}\s*\{
replace: }\r\n{
