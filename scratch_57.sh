yarn percy exec -t 10000 -- -- \
  node scripts/functional_tests \
    --debug --bail \
    --kibana-install-dir "$installDir" \
    --config test/visual_regression/config.ts;



yarn percy exec -t 10000 -- -- \
  node scripts/functional_tests \
    --debug --bail \
    --config test/visual_regression/config.ts;
