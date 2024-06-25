const mongoose = require("mongoose");

const userschema = new mongoose.Schema({
    username:String,
    password:String,
    email:String
  })
  
  const movieschema = new mongoose.Schema({
    title:String,
    description:String,
    releaseDate:String,
    category:String,
    actors: [{ name: String }],
    image:String,
    ratings: [
      {
        value: Number
      },
    ],
    comments: [
      {
        text: String,
      },
    ],
    addedBy: String,
  });
  
  
  const movie = mongoose.model('movies',movieschema )
  const user = mongoose.model('moviesapi',userschema)

  module.exports = {user,movie}