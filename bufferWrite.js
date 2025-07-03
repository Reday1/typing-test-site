import fs from "fs";


let a="HERE IS THE DATA";
let abuff=Buffer.from(a,"utf8");

console.log(abuff);

let b="$$//**%%$$";
let bbuff=Buffer.from(b,"utf8");

let tbuff=Buffer.concat([bbuff,abuff]);
console.log(tbuff);

let fd=fs.openSync("t.txt","a+");
let bytesWritten=fs.writeSync(fd,tbuff);
console.log(`[TOTAL BYTES WRITTEN]: `+bytesWritten);


