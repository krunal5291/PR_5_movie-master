const { default: mongoose } = require("mongoose");


const connection = ()=>{
    mongoose.connect('mongodb://localhost:27017')
    console.log('db connected');
}

module.exports = {connection}