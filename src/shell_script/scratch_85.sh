  COVERAGE_PEEK=true \
    COVERAGE_PEEK_SIZE=4 \
    CI_STATS_DISABLED=true \
    node scripts/ingest_coverage.js \
      --verbose \
      --path src/dev/code_coverage/ingest_coverage/integration_tests/mocks/jest-combined/bulk-data.json \
      --vcsInfoPath ./VCS_INFO.txt \
      --teamAssignmentsPath team-assignments.txt > local-ingestion.txt
