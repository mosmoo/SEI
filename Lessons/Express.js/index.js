import express from "express"
const app = express()

// App is an object with a method of 'listen'
app.listen(4000, ()=> {
    console.log('app listening on port 4000')
}) // Set up an anonymous call back function.

// node index.js 

//If you look up localhost:4000 while the command is still running it'll say 'Cannot Get /'. This means are app is running and we're able to visit in the browser. But we're missing routes.

// first a / string then a callback function wtih two arguments request and response
app.get('/',(req,res)=>{
    res.send('Hello')
})
//This whole thing ^^ is called a 'route'