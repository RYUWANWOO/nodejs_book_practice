process.once('uncaughtException', function (error) {
  console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');
});

var test =function () {
  setTimeout(test,2000);
  error.error.error();
}
setTimeout(test,2000);
