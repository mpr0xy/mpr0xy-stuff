var tesseract = require('node-tesseract');

// Recognize text of any language in any format
tesseract.process('/tmp/coding/1.png',function(err, text) {
    if(err) {
        console.error(err);
    } else {
        console.log(text);
    }
});