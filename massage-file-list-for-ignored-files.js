let x = `- test/accessibility/config.ts
- test/analytics/config.ts
- test/api_integration/config.js
- test/examples/config.js
- test/functional/apps/bundles/config.ts
- test/functional/apps/console/config.ts
- test/functional/apps/context/config.ts
- test/functional/apps/dashboard/group1/config.ts
- test/functional/apps/dashboard/group2/config.ts
- test/functional/apps/dashboard/group3/config.ts
- test/functional/apps/dashboard/group4/config.ts
- test/functional/apps/dashboard/group5/config.ts
- test/functional/apps/dashboard/group6/config.ts
- test/functional/apps/dashboard_elements/config.ts
- test/functional/apps/discover/ccs_compatibility/config.ts
- test/functional/apps/discover/classic/config.ts
- test/functional/apps/discover/embeddable/config.ts
- test/functional/apps/discover/group1/config.ts
- test/functional/apps/discover/group2/config.ts
- test/functional/apps/getting_started/config.ts
- test/functional/apps/home/config.ts
- test/functional/apps/kibana_overview/config.ts
- test/functional/apps/management/config.ts
- test/functional/apps/saved_objects_management/config.ts
- test/functional/apps/status_page/config.ts
- test/functional/apps/visualize/group1/config.ts
- test/functional/apps/visualize/group2/config.ts
- test/functional/apps/visualize/group3/config.ts
- test/functional/apps/visualize/group4/config.ts
- test/functional/apps/visualize/group5/config.ts
- test/functional/apps/visualize/group6/config.ts
- test/functional/apps/visualize/replaced_vislib_chart_types/config.ts
- test/functional/config.ccs.ts
- test/functional/config.firefox.js
- test/interactive_setup_api_integration/enrollment_flow.config.ts
- test/interactive_setup_api_integration/manual_configuration_flow.config.ts
- test/interactive_setup_api_integration/manual_configuration_flow_without_tls.config.ts
- test/interactive_setup_functional/enrollment_token.config.ts
- test/interactive_setup_functional/manual_configuration.config.ts
- test/interactive_setup_functional/manual_configuration_without_security.config.ts
- test/interactive_setup_functional/manual_configuration_without_tls.config.ts
- test/interpreter_functional/config.ts
- test/node_roles_functional/all.config.ts
- test/node_roles_functional/background_tasks.config.ts
- test/node_roles_functional/ui.config.ts
- test/plugin_functional/config.ts
- test/server_integration/http/platform/config.status.ts
- test/server_integration/http/platform/config.ts
- test/server_integration/http/ssl/config.js
- test/server_integration/http/ssl_redirect/config.js
- test/server_integration/http/ssl_with_p12/config.js
- test/server_integration/http/ssl_with_p12_intermediate/config.js
- test/ui_capabilities/newsfeed_err/config.ts
- x-pack/test/accessibility/config.ts
- x-pack/test/alerting_api_integration/security_and_spaces/group1/config.ts
- x-pack/test/alerting_api_integration/security_and_spaces/group2/config.ts
- x-pack/test/api_integration/config.ts
- x-pack/test/api_integration/config_security_basic.ts
- x-pack/test/api_integration/config_security_trial.ts
- x-pack/test/api_integration_basic/config.ts
- x-pack/test/cases_api_integration/security_and_spaces/config_basic.ts
- x-pack/test/cases_api_integration/security_and_spaces/config_trial.ts
- x-pack/test/cases_api_integration/spaces_only/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group1/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group2/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group3/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group4/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group5/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group6/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group7/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group8/config.ts
- x-pack/test/detection_engine_api_integration/security_and_spaces/group9/config.ts
- x-pack/test/encrypted_saved_objects_api_integration/config.ts
- x-pack/test/endpoint_api_integration_no_ingest/config.ts
- x-pack/test/examples/config.ts
- x-pack/test/fleet_api_integration/config.ts
- x-pack/test/fleet_functional/config.ts
- x-pack/test/functional/apps/advanced_settings/config.ts
- x-pack/test/functional/apps/aiops/config.ts
- x-pack/test/functional/apps/api_keys/config.ts
- x-pack/test/functional/apps/apm/config.ts
- x-pack/test/functional/apps/canvas/config.ts
- x-pack/test/functional/apps/cross_cluster_replication/config.ts
- x-pack/test/functional/apps/dashboard/group1/config.ts
- x-pack/test/functional/apps/dashboard/group2/config.ts
- x-pack/test/functional/apps/dashboard/group3/config.ts
- x-pack/test/functional/apps/data_views/config.ts
- x-pack/test/functional/apps/dev_tools/config.ts
- x-pack/test/functional/apps/discover/config.ts
- x-pack/test/functional/apps/graph/config.ts
- x-pack/test/functional/apps/grok_debugger/config.ts
- x-pack/test/functional/apps/home/config.ts
- x-pack/test/functional/apps/index_lifecycle_management/config.ts
- x-pack/test/functional/apps/index_management/config.ts
- x-pack/test/functional/apps/infra/config.ts
- x-pack/test/functional/apps/ingest_pipelines/config.ts
- x-pack/test/functional/apps/lens/group1/config.ts
- x-pack/test/functional/apps/lens/group2/config.ts
- x-pack/test/functional/apps/lens/group3/config.ts
- x-pack/test/functional/apps/license_management/config.ts
- x-pack/test/functional/apps/logstash/config.ts
- x-pack/test/functional/apps/management/config.ts
- x-pack/test/functional/apps/maps/group1/config.ts
- x-pack/test/functional/apps/maps/group2/config.ts
- x-pack/test/functional/apps/maps/group3/config.ts
- x-pack/test/functional/apps/maps/group4/config.ts
- x-pack/test/functional/apps/ml/anomaly_detection/config.ts
- x-pack/test/functional/apps/ml/data_frame_analytics/config.ts
- x-pack/test/functional/apps/ml/data_visualizer/config.ts
- x-pack/test/functional/apps/ml/permissions/config.ts
- x-pack/test/functional/apps/ml/short_tests/config.ts
- x-pack/test/functional/apps/ml/stack_management_jobs/config.ts
- x-pack/test/functional/apps/monitoring/config.ts
- x-pack/test/functional/apps/remote_clusters/config.ts
- x-pack/test/functional/apps/reporting_management/config.ts
- x-pack/test/functional/apps/rollup_job/config.ts
- x-pack/test/functional/apps/saved_objects_management/config.ts
- x-pack/test/functional/apps/security/config.ts
- x-pack/test/functional/apps/snapshot_restore/config.ts
- x-pack/test/functional/apps/spaces/config.ts
- x-pack/test/functional/apps/status_page/config.ts
- x-pack/test/functional/apps/transform/config.ts
- x-pack/test/functional/apps/upgrade_assistant/config.ts
- x-pack/test/functional/apps/uptime/config.ts
- x-pack/test/functional/apps/visualize/config.ts
- x-pack/test/functional/apps/watcher/config.ts
- x-pack/test/functional/config.ccs.ts
- x-pack/test/functional/config.firefox.js
- x-pack/test/functional/config_security_basic.ts
- x-pack/test/functional_basic/config.ts
- x-pack/test/functional_cors/config.ts
- x-pack/test/functional_embedded/config.ts
- x-pack/test/functional_enterprise_search/without_host_configured.config.ts
- x-pack/test/functional_execution_context/config.ts
- x-pack/test/functional_synthetics/config.js
- x-pack/test/functional_with_es_ssl/config.ts
- x-pack/test/kubernetes_security/basic/config.ts
- x-pack/test/licensing_plugin/config.public.ts
- x-pack/test/licensing_plugin/config.ts
- x-pack/test/observability_api_integration/basic/config.ts
- x-pack/test/observability_api_integration/trial/config.ts
- x-pack/test/observability_functional/with_rac_write.config.ts
- x-pack/test/performance/journeys/ecommerce_dashboard/config.ts
- x-pack/test/performance/journeys/flight_dashboard/config.ts
- x-pack/test/performance/journeys/login/config.ts
- x-pack/test/performance/journeys/many_fields_discover/config.ts
- x-pack/test/performance/journeys/promotion_tracking_dashboard/config.ts
- x-pack/test/performance/journeys/web_logs_dashboard/config.ts
- x-pack/test/plugin_api_integration/config.ts
- x-pack/test/plugin_functional/config.ts
- x-pack/test/reporting_api_integration/reporting_and_security.config.ts
- x-pack/test/reporting_api_integration/reporting_without_security.config.ts
- x-pack/test/reporting_functional/reporting_and_deprecated_security.config.ts
- x-pack/test/reporting_functional/reporting_and_security.config.ts
- x-pack/test/reporting_functional/reporting_and_timeout.config.ts
- x-pack/test/reporting_functional/reporting_without_security.config.ts
- x-pack/test/rule_registry/security_and_spaces/config_basic.ts
- x-pack/test/rule_registry/security_and_spaces/config_trial.ts
- x-pack/test/rule_registry/spaces_only/config_basic.ts
- x-pack/test/rule_registry/spaces_only/config_trial.ts
- x-pack/test/saved_object_tagging/api_integration/security_and_spaces/config.ts
- x-pack/test/saved_object_tagging/api_integration/tagging_api/config.ts
- x-pack/test/saved_object_tagging/functional/config.ts
- x-pack/test/saved_objects_field_count/config.ts
- x-pack/test/security_api_integration/anonymous.config.ts
- x-pack/test/security_api_integration/audit.config.ts
- x-pack/test/security_api_integration/http_bearer.config.ts
- x-pack/test/security_api_integration/http_no_auth_providers.config.ts
- x-pack/test/security_api_integration/kerberos.config.ts
- x-pack/test/security_api_integration/login_selector.config.ts
- x-pack/test/security_api_integration/oidc.config.ts
- x-pack/test/security_api_integration/oidc_implicit_flow.config.ts
- x-pack/test/security_api_integration/pki.config.ts
- x-pack/test/security_api_integration/saml.config.ts
- x-pack/test/security_api_integration/session_idle.config.ts
- x-pack/test/security_api_integration/session_invalidate.config.ts
- x-pack/test/security_api_integration/session_lifespan.config.ts
- x-pack/test/security_api_integration/token.config.ts
- x-pack/test/security_api_integration/user_profiles.config.ts
- x-pack/test/security_functional/insecure_cluster_warning.config.ts
- x-pack/test/security_functional/login_selector.config.ts
- x-pack/test/security_functional/oidc.config.ts
- x-pack/test/security_functional/saml.config.ts
- x-pack/test/security_functional/user_profiles.config.ts
- x-pack/test/security_solution_endpoint/config.ts
- x-pack/test/security_solution_endpoint_api_int/config.ts
- x-pack/test/session_view/basic/config.ts
- x-pack/test/timeline/security_and_spaces/config_trial.ts
- x-pack/test/upgrade_assistant_integration/config.js
- x-pack/test/usage_collection/config.ts`
let xs = x.split('\n')
let fmtd = xs.map(x => x.split('-')[1].trim())
let a = fmtd.map(x => `Path.resolve(REPO_ROOT, '${x}')`)

console.log(`\n### a: \n${JSON.stringify(a, null, 2)}`)
// console.log(`\n### fmtd: \n${JSON.stringify(fmtd, null, 2)}`)
