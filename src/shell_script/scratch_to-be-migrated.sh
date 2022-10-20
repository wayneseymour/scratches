https://github.com/elastic/kibana/pull/136288
??? Should we migrate
    x-pack/test/functional/es_archives/reporting/ecommerce_kibana_spaces
### Yes, it needs migration
  ### Saved Object type(s) that we care about:
    dashboard
    index-pattern
    search
  ### Test file(s) that use it:
    x-pack/test/reporting_api_integration/reporting_and_security/spaces.ts
  ### Config(s) that govern the test file(s):
    x-pack/test/reporting_api_integration/reporting_and_security.config.ts
    x-pack/test/reporting_api_integration/reporting_without_security.config.ts

https://github.com/elastic/kibana/pull/136531
??? Should we migrate
    x-pack/test/functional/es_archives/dashboard/session_in_space
### Yes, it needs migration
  ### Saved Object type(s) that we care about:
    dashboard
    index-pattern
    visualization
  ### Test file(s) that use it:
    x-pack/test/search_sessions_integration/tests/apps/discover/sessions_in_space.ts
    x-pack/test/search_sessions_integration/tests/apps/dashboard/async_search/sessions_in_space.ts
  ### Config(s) that govern the test file(s):
    x-pack/test/search_sessions_integration/config.ts

https://github.com/elastic/kibana/pull/136636
??? Should we migrate
    x-pack/test/functional/es_archives/spaces/copy_saved_objects
### Yes, it needs migration
  ### Saved Object type(s) that we care about:
    dashboard
    index-pattern
    visualization
  ### Test file(s) that use it:
    x-pack/test/functional/apps/spaces/copy_saved_objects.ts
  ### Config(s) that govern the test file(s):
    x-pack/test/functional/apps/spaces/config.ts

??? Should we migrate
    x-pack/test/functional/es_archives/spaces/multi_space
### Yes, it needs migration
  ### Saved Object type(s) that we care about:
    dashboard
    index-pattern
    visualization
  ### Test file(s) that use it:
    x-pack/test/functional/apps/discover/preserve_url.ts
    x-pack/test/functional/apps/visualize/preserve_url.ts
    x-pack/test/functional/apps/dashboard/group1/preserve_url.ts
  ### Config(s) that govern the test file(s):
    x-pack/test/functional/apps/dashboard/group1/config.ts
    x-pack/test/functional/apps/discover/config.ts
    x-pack/test/functional/apps/visualize/config.ts
