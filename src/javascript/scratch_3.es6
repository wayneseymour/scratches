var fs = require('fs');
fs.readFile('/Users/tre/main/x-pack/test/functional/es_archives/spaces/multi_space/data.json', function(err, data) {
  if (err) {
    console.log(err);
  } else {
    // var data = JSON.stringify(data.toString().trim().split('\n').map(JSON.parse));
    // if (process.argv[3] == "-o" && process.argv[4]) {
    //   fs.writeFile(process.argv[4], data, function (err) {
    //     if (err) return console.log(err);
    //   });
    //   return;
    // }
    // process.stdout.write(data);

    const split = data.split('\n');
    split
  }
});
