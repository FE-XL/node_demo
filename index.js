var server = require('./server');
var router = require('./router');
var requestHandlers = require('./requestHandlers');

let handles = {};
handles['/start'] = requestHandlers.start;
handles['/'] = requestHandlers.start;
handles['/upload'] = requestHandlers.upload;
handles['/show'] = requestHandlers.show;

server.start(router.route, handles);
