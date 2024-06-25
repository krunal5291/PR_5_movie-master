const { default: mongoose } = require("mongoose");


const connection = ()=>{
    mongoose.connect('mongodb+srv://harshillakhani009:harshillakhani009@cluster0.egpujzu.mongodb.net/?retryWrites=true&w=majority')
    console.log('db connected');
}

module.exports = {connection}