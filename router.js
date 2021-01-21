function route(pathname, handles, response, request) {
  if (typeof handles[pathname] === 'function') {
    handles[pathname](response, request);
  } else {
    console.log("No request handler found for " + pathname);
    response.writeHead(404, {"Content-Type": "text/plain"});
    response.write("404 Not found");
    response.end();
  }
}

exports.route = route;
