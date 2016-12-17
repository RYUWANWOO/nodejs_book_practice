var fs = require('fs');

try {
  var data = fs.readFileSync('textFile.txt', 'utf8');
  console.log(data);
} catch (e) {
  console.log(e);
}


try {
  fs.writeFileSync('textFile.txt', 'Hello World .. !' ,'utf8');
  console.log('FILE WRITE COMPLETE');
} catch (e) {
  console.log(e);
}
