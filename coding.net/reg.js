var request = require('request');
var through = require('through2');
var format = require('util').format;
var sleep = require('sleep');
var request = request.defaults({jar: true})
var j = request.jar()
var fs = require('fs');
var md5 = require('MD5');
var tesseract = require('node-tesseract');

var length = 300;

var array = [length]


for (var i = 0; i < length; i++){
    array[i] = i;
}
console.log(process.argv[2])
request({url:'https://coding.net/api/getCaptcha', encoding: 'utf8'}, function (error, response, body){
  function loop(num){
    var data = request('https://coding.net/api/getCaptcha?code=1408244574963')
    var png = fs.createWriteStream('/tmp/coding/0.png')
    data.pipe(png)
    png.on('finish', function() {
        request('https://coding.net/api/events/user/inviter?id=mproxy', {headers: {'Referer': 'https://coding.net/moon/mproxy'}}, function (error, response, body){
            request('https://coding.net/api/events/invite/whos?id=mproxy', {headers: {'Referer': 'https://coding.net/moon/mproxy'}}, function (error, response, body){
                tesseract.process('/tmp/coding/0.png',function(err, text) {
                    if(err) {
                        console.error(err);
                    } else {
                        code = text.replace(' ', '');
                        var payload = {
                            user: 'mproxy',
                            email: process.argv[2] + '@mailnesia.com',
                            global_key: process.argv[2],
                            j_captcha: code
                        }
                        request.post('https://coding.net/api/events/user/register', {form: payload, headers: {'Referer': 'https://coding.net/moon/mproxy'}}, function (error, response, body){
                            if (error){
                                console.error(err)
                            }
                            else{
                                console.log(body);
                            }
                        })
                    }
                });
            });    
        })
          
    });
    
    // sleep.sleep(1)   
    
    // , function (error, response, body) {
    //   console.log('Captcha')
    //   //console.log(body)
    //   if (!error && response.statusCode == 200) {
    //     var buff = new Buffer(body, 'utf8');
    //     var filename = md5(buff)
    //     fs.writeFile('/tmp/coding/' + filename + '.png', buff, {encoding:'utf8'},  function (err) {
    //       if (err) throw err;
    //       console.log('It\'s saved!');
    //       loop()
    //     });
    //   }
    // }) 
  }
  loop(1)
})
