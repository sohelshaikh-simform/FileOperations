const fs=require('fs');

fs.writeFileSync('../txt/first.txt',"Hello sohel,How are you");


fs.appendFileSync('../txt/first.txt',"\nthis is append data");

const data=fs.readFileSync('../txt/first.txt','utf-8');
console.log(data);