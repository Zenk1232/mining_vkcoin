console.log('[Система] Разработчики vk.com/mload');

function ma(){
var fs = require('fs');
var obj;
fs.readFile('user.txt', 'utf8', function (err, data) {
  if (err) throw err;
   obj = JSON.parse(data);
   //console.log(obj.token);


const request = require('request');
const url = 'https://mload.net.ru/anti.php';
var answer = '';

request({
   method: 'get',
   url: url,
   qs: {
     token: obj.token,
     secret: obj.secret,
     v: obj.v,
     key: obj.key,
   }
  }, function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body);
    answer = body;
  }
})
});
}
console.log('[Система] Ответ получен.');
setInterval(ma,2000);