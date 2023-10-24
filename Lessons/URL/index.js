import express from "express"
const app = express()

app.listen(4000, ()=> {
    console.log('app is running on server 4000')
})

app.get('/test/:anotherTest', (req,res)=>{ //: is called slug 
    //Whatever is saved as a slug makes it an obejct key not an object value.
    //Whatever the client puts as a value where the slug is, gets saved as a value for :anotherTest.
    console.log(req.params)
    // The console.log here will show on the terminal
    res.json({ hello: 'World'})
    //instead of using res.send so we can send a bunch of different type of data needs to be built back into an object.
})

app.get('/:name',(req,res)=>{
    res.json({hello: req.params.name})
})

app.get('/flights/:departure-:arrival/:dateLeaving/:dateArriving',(req, res)=>{
    res.json({
        departure: req.params.departure,
        arrival: req.params.arrival,
        dateLeaving: req.params.dateLeaving,
        dateArriving: req.params.dateArriving,
    })
})
// /flights/WAS-HKG/2019-12-06/2019-12-13
