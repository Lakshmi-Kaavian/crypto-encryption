const crypto = require("crypto");
const algorithm = "aes-256-cbc"; 
const initVector = crypto.randomBytes(16);
const Securitykey = crypto.randomBytes(32);
console.log(Securitykey);

function encryption (str){
const cipher = crypto.createCipheriv(algorithm, Securitykey, initVector);
let encryptedData = cipher.update(str, "utf-8", "hex");
encryptedData += cipher.final("hex");
return encryptedData;
}

function decryption (str1){
const decipher = crypto.createDecipheriv(algorithm, Securitykey, initVector);
let decryptedData = decipher.update(str1, "hex", "utf-8");
decryptedData += decipher.final("utf8");
return decryptedData;
}
module.exports={
    encryption,decryption
}