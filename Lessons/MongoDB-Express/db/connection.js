const mongoose =  require('mongoose')

mongoose.connect('mongodb://localhost/bookmarks')

// Set up functions to console log the status of connection
mongoose.connection.on('connected', ()=> {
    console.log('connected')  
})

mongoose.connection.on('disconnected', ()=> {
    console.log('disconnected')  
})

mongoose.connection.on('error', ()=> {
    console.log('error')  
})
module.exports = mongoose