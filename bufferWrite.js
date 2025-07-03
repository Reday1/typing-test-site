import fs from "fs";

let fd=fs.openSync("t.txt","w+");
let s1=`Krish `;
let buff1=Buffer.from(s1,"utf8");

let bw1=fs.writeSync(fd,buff1);

let s2=`Guleria `;
let buff2=Buffer.from(s2,"utf8");

let bw2=fs.writeSync(fd,buff2);


