var BASE64_MARKER = ';base64,';
function convertDataURIToBinaryFF(dataURI) {
    var base64Index = dataURI.indexOf(BASE64_MARKER) + BASE64_MARKER.length;
    var raw = require('atob')(dataURI.substring(base64Index));
    return Uint8Array.from(Array.prototype.map.call(raw, function(x) {
        return x.charCodeAt(0);
    }));
};

module.exports = convertDataURIToBinaryFF;