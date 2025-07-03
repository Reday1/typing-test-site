import fs from "fs";


let fd=fs.openSync("a.jpg","a+");
let stat=fs.statSync("a.jpg");

let buff=Buffer.alloc(stat.size);
console.log(buff.length);

let a=fs.readSync(fd,buff);
console.log(a);

console.log(buff);

let fd_t=fs.openSync("t.jpg","w");
let bitesWritten=fs.writeSync(fd_t,buff);
console.log(bitesWritten);


//console.log(stat.size);
//console.log((stat.size)/(1024*1024));
