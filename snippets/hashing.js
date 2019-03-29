// Map arbitrary size of data to a fixed size of data
const crypto = require('crypto');

const text = 'Hello VanJS';
const hash = crypto.createHash('sha256').update(text).digest('hex');

console.log(hash);
// 779127da9d005b619dab2810428bae5ff979c1e68033acb43650b13ef2a34bdf