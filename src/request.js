var request = require("request");

//get请求


module.exports= function(url){
    console.log(url)
    return new Promise((resolve, reject)=>{
      
        request(url, function(error, response, body) {
          resolve(body)
        });
    });
}