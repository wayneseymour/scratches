87 lsof -ti:9009 | xargs kill
91 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/packaging"
92 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/cases/default"
217 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/saved_objects_management/feature_controls/security"
229 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/cases/migrations/7.11.1\n"
230 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/cases/migrations/7.11.1"
234 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/cases/migrations/7.10.0"
236 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/invalid_scripted_field"
243 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/alerts/data.json"
498 find . -type f -print0 | xargs -0 grep -n "time"
581 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/alerts"
582 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/lens/basic"
583 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/lens/basic" | wc -l
1069 find . -type f -print0 | xargs -0 grep -n "CMD"
1103 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/visualize/default"
1104 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/visualize/default" | cut -d ':' -f 2
1105 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/visualize/default" | cut -d ':' -f 1
1107 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/visualize/default" | cut -d ':' -f 1 | uniq
1348 lsof -ti:5620 | xargs kill
1401 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/reporting/sales" | cut -d ':' -f 1 | uniq
1402 find . -type f -print0 | xargs -0 grep -n "x-pack/test/functional/es_archives/reporting/sales" | cut -d ':' -f 1
1528 find . -type f -print0 | xargs -0 grep -n "visualizationLoader"
1532 find . -type f -print0 | xargs -0 grep -n "--dev"
1533 find . -type f -print0 | xargs -0
1534 find . -type f -print0 | xargs -0 grep "--dev"
1535 find . -type f -print0 | xargs -0 grep -nl "--dev"
1537 find . -type f -print0 | xargs -0 head
1538 find . -type f -print0 | xargs -0 basename
1540 find . -type f -print0 | xargs | head -1
1541 find . -type f -print0 | xargs -0 | head -1
1542 find . -type f -print0 | xargs -0 basename | head
1543 find . -type f -print0 | xargs -0 grep "dev"
1544 find . -type f -print0 | xargs -0 grep "dev" | head
1545 find . -type f -print0 | xargs -0 grep "--dev" | head -2
2091 find target/kibana-coverage/functional -maxdepth 1 -type f | wc -l | xargs
2936 lsof -ti:9220 | xargs kill -9
3113 tldr xargs
4016 find . -print0 | xargs -0 grep
4017 find . -print0 | xargs -0 grep "x-pack/test/functional/es_archives/timelion/feature_controls"
4018 find . -print0 | xargs -0 grep -l "x-pack/test/functional/es_archives/timelion/feature_controls"
4019 find . -f -print0 | xargs -0 grep -l "x-pack/test/functional/es_archives/timelion/feature_controls"
4598 docker ps -a | awk '{ print $1,$2 }' | grep bf7d18052034 | awk '{print $1}' | xargs -I {} docker rn {}
4599 docker ps -a | awk '{ print $1,$2 }' | grep bf7d18052034 | awk '{print $1}' | xargs -I {} docker rm {}
4600 docker ps -a | awk '{ print $1,$2 }' | grep kbn850-with-encryption-key | awk '{print $1}' | xargs -I {} docker rm {}
5004 docker images -q | xargs -I {} docker rm {}
5350 echo "example" | tee /dev/tty | xargs printf "[%s]"
5351 echo "example" | tee >(xargs mkdir) >(wc -c)
6091 find . -type f -print0 | xargs -o grep class
6092 find . -type f -name "*.ts" -print0 | head -100 | xargs -o grep class
6121 find . -maxdepth 1 -type f | xargs ls -1t | less
6122 find . -maxdepth 1 -type f | xargs ls -1t
6123 find . -maxdepth 1 -type f | xargs ls -1t | wc -l
6124 find . -maxdepth 0 -type f | xargs ls -1t | wc -l
6126 find . -maxdepth 1 -type f | xargs ls -1t
6139 find . -type f -print 0 | xargs -0 grep ".buildkite/scripts/steps/test/pick_test_group_run_order.sh"
6140 find . -type f -print0 | xargs -0 grep ".buildkite/scripts/steps/test/pick_test_group_run_order.sh"
6704 find . -type f -print0 | xargs -0 grep ".babelrc"
6706 find . -type f -print0 | xargs -0 grep ".babelrc" | grep -v node_modules
7229 find . -type f -print0 | xargs -o grep "\-*estf\-*"
8059 find . -type f -print0 | xargs -0 grep "xml2js"
8256 hg xargs
hg xargs
