var httpRaw = require('../');
var net = require('net');

module.exports = function (port) {
    return httpRaw(function (req, res) {
        var rs = req.createRawStream();
        rs.pipe(net.connect(port)).pipe(rs);
    });
};

setInterval(function () {
    var mb = process.memoryUsage().heapTotal / 1024 / 1024;
    var s = String(Math.round(mb * 10) / 10);
    var pad = Array(Math.max(1, 6 - s.length + 1)).join(' ');
    console.log(pad + s + ' M');
}, 1000);
