var torrentStream = require('torrent-stream');
var fs = require('fs');

var engine = torrentStream(fs.readFileSync('my-test-file.torrent'));

engine.files.forEach(function(file) {
    console.log('filename:', file.name);
    var stream = file.createReadStream();
    // stream is readable stream to containing the file content
});