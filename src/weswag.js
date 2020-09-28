#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const fs = require('fs');

// const cfg = require('./template')
const p = require('path')

program.storeOptionsAsProperties(true)
.passCommandToAction(false).version(require("./package.json").version, '-v') // 设置版本
     // 自定义形参[port]
    .option('-u, --url <url>',"file是网络链接")
    .option('-t, --template [file]', '输入njk模板')
    .option('-n, --name [file]', '输入njk名称', 'requestTemplate')
    .option('-p, --preprocess [preprocess]','预处理函数','process.js')
    .option('-o, --output [file]', '输出文件名', 'requestSchema.js')
    .parse(process.argv); // 参数数组
console.log("we-swag version:" + chalk.green.bold(program._version));
console.log("swagger doc path:" + chalk.green.bold(program.url));

const request =require( './request.js')

request(program.url).then(res=>{
    var data = JSON.parse(res)
    console.log("api title:" + chalk.green(data.info.title));
    console.log("api version:" + chalk.green(data.info.version));
    for (var path in data.paths) {
        console.log("api:" + chalk.green(path));
    }
    var template=''
    if(program.template.indexOf('.njk')==-1){
        template = fs.readFileSync(p.resolve(__dirname + `/template/${program.template}.njk`), 'utf-8')
    }else{
        template = fs.readFileSync(program.template, 'utf-8')
    }
    // const pre = require(program.preprocess)
    // console.log(program.preprocess)
    const pre=require(`${program.preprocess}`)
    data= pre(data)
    console.log(data)
    var content = nunjucks.renderString(template, { data: data });
    fs.writeFileSync(program.output, content)
})


// try {
//     var str=""
//     if(program.url){
//         const sync = require('xd-synchttp');
//         console.log("从远程地址下载"+ chalk.green(program.file))
//         str = sync.http_get(program.file,0);
//         console.log(chalk.green("下载完成"))
//         console.log(str)

         
//     }else{
//         var str = fs.readFileSync(program.file, 'utf-8');
//     }
   
//     var data = JSON.parse(str)
//     console.log("api title:" + chalk.green(data.info.title));
//     console.log("api version:" + chalk.green(data.info.version));
//     for (var path in data.paths) {
//         console.log("api:" + chalk.green(path));
//     }
//     var template=''
//     if(program.template){

//     }else{
//         template = fs.readFileSync(p.resolve(__dirname + '/template/requestTemplate.njk'), 'utf-8')

//     }
     
//     var content = nunjucks.renderString(template, { data: data });
//     fs.writeFileSync('request.js', content)
// } catch (err) {
//     console.log(chalk.red.bold(err))
// }

