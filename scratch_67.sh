for i in `grep -rl '"index": ".kibana' ./x-pack/test/functional/es_archives | sort -u`; do echo ${i%/*}; \
node scripts/es_archiver.js load ${i%/*}; \
 node scripts/kbn_archiver.js save test/functional/fixtures/temp/${i%/*} --config test/functional/config.js --type index-pattern,search,visualization,dashboard,lens,map,graph-workspace,query,tag,url; \
 node scripts/es_archiver.js unload ${i%/*}; \
echo '-------------------------------------\n'; \
done


for i in `grep -rl '"index": ".kibana' ./x-pack/test/functional/es_archives | sort -u`;
  do echo ${i%/*}; >> archives.txt
done


while read line
  do echo $line
  node scripts/es_archiver.js load $line
done < archives.txt







 node scripts/kbn_archiver.js save x-pack-test/functional/fixtures/temp/${arc} --config x-pack/test/functional/config.js --type index-pattern,search,visualization,dashboard,lens,map,graph-workspace,query,tag,url
