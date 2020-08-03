#!/usr/bin/env node

const program = require('commander');
const chalk = require('chalk');
const nunjucks = require('nunjucks');
const fs = require('fs');

// const cfg = require('./template')
const p = require('path')

program.version(require("./package.json").version, '-v') // 设置版本
    .option('-f, --file <file>', '填入文件路径') // 自定义形参[port]
    .parse(process.argv); // 参数数组

console.log("we-swag version:" + chalk.green.bold(program._version));
console.log("swagger doc path:" + chalk.green.bold(program.file));




try {
    var str = fs.readFileSync(program.file, 'utf-8');
    var data = JSON.parse(str)
    console.log("api title:" + chalk.green(data.info.title));
    console.log("api version:" + chalk.green(data.info.version));
    for (var path in data.paths) {
        console.log("api:" + chalk.green(path));
    }
    var template = fs.readFileSync(p.resolve(__dirname + '/template/requestTemplate.njk'), 'utf-8')

    var content = nunjucks.renderString(template, { data: data });
    fs.writeFileSync('request.js', content)
} catch (err) {
    console.log(chalk.red.bold(err))
}