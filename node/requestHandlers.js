/**
 * Created by sunmy on 16/3/22.
 */

function start(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request handler 'start' was called");
    response.end();
}
function upload(response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Request handler 'upload' was called");
    response.end();
}

exports.start = start;
exports.upload = upload;