//import crypto from "crypto";
//console.log(crypto);
//const a = crypto.createHash("sha256");
//console.log(a);
//const b=crypto.randomBytes(32);
//console.log(b);
//const c=b.toString("hex");
//console.log(c);
//const d=b.toString("base64");
//console.log(d);


import fs from "fs";

//console.log(fs);

let a =Buffer.from("Hi there");
console.log(a);


let b=fs.openSync("t.txt","w+");
console.log(b);
