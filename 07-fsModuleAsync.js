const {readFile, writeFile} = require('fs')

console.log("starting the task");

readFile('./content/first.txt', 'utf8', (err, result) =>{
    if(err){
        console.log(err);
        return
    }

    const first = result
    readFile('./content/second.txt', 'utf8', (err, result)=>{
        if(err){
            console.log(err);
            return
        }

        const second = result
        writeFile('./content/resultAsync.txt', `Here is the result: ${first}, ${second}`,
            (err, res) =>{
                if(err){
                    console.log(err);
                    return
                }
                console.log("done with this task");
                
            }
        )
    })

})

console.log("going to next task");
