const path = require('path')
console.log(path);


const filePath = path.join('content', 'subfolder', 'test.txt')
console.log(filePath);

const baseFile = path.basename(filePath)
console.log(baseFile);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute);


