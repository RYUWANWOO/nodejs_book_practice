var custom = new process.EventEmitter();

custom.on('tick', function (code ){
  console.log('이벤트를 실행합니다. ^_^');
});

custom.emit('tick');
