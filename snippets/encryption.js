const crypto = require('crypto');
const read = require('fs').readFileSync;

// The original message
const message = Buffer.from('Hi Alice! This is a secret :)');

// ENCRYPT message with Alice PUBLIC key
const alicePublicKey = read('./keys/alice/public_key.pem');
const encrypted = crypto.publicEncrypt(alicePublicKey, message);

// Create a signature for Bob to sign
const sign = crypto.createSign('sha256');

sign.write(message);
sign.end();

// Create a signature of the original message with Bobs PRIVATE key
const bobPrivateKey = read('./keys/bob/private_key.pem');
const signature = sign.sign(bobPrivateKey, 'base64');


// -----------------------------------------------------------------


// DECRYPT message with Alice PRIVATE key
const alicePrivateKey = read('./keys/alice/private_key.pem');
const decrypted = crypto.privateDecrypt(alicePrivateKey, encrypted);

console.log(decrypted.toString());

// Verify decrypted message against Bobs signature and public key
const bobPublicKey = read('./keys/bob/public_key.pem');
const verify = crypto.createVerify('sha256');

verify.update(decrypted);

// Verify signature against Bob's PUBLIC key
const isValid = verify.verify(bobPublicKey, signature, 'base64');

console.log(isValid);
