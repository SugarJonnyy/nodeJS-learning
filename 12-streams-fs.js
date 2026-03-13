const {writeFileSync, createReadStream} = require('fs')


for (let index = 0; index < 100; index++) {
    writeFileSync('./content/subfolder/big.txt',  `Hello darling!!\n`, {flag: 'a'})
}
const stream = createReadStream('./content/subfolder/big.txt', {highWaterMark: 5000, encoding: 'utf8'})

// default 64kb
// last buffer -> remainder 
// highWaterMark -> control size
// encoding gives orignial data 


stream.on('data', (result)=>{
    console.log(result);
})

stream.on('error', (err)=>{console.log(err)})

