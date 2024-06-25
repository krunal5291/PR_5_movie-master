const { user, movie } = require("../models/user.schema");

// home 
const welcome = (req,res)=>{
    res.send('Welcome to the movie API')
}

// all user
const alldata = async(req,res)=>{
    const data = await user.find()
    res.send(data)
}
// signup
const signup = async(req,res)=>{
    const data = await user.findOne({email : req.body.email})
    if(data){
        res.send('your account already exist')
    }
    else{
        const create = await user.create(req.body)
        res.status(201).send(create)
    }
}
 // delete user
const dlt = async(req,res)=>{
    const {id} = req.params
    const data = await user.findByIdAndDelete(id)
    res.send({message: 'User deleted successfully'})
}

// login
const login = async(req,res)=>{
    const data = await user.findOne({username : req.body.username, password : req.body.password})
    if(data){
        res.send({message:'Logged in successfully'})
    }
    else{
        res.status(401).json({error:"Invalid username or password"})
    }
}

// create movie
const moviecreate = async(req,res)=>{
    const data = await movie.create(req.body)
    res.status(201).send(data)
} 

// update movie
const movieupdate = async(req,res)=>{
    const {id} = req.params
    const data = await movie.findByIdAndUpdate(id,req.body)
    const updated = await movie.findById(id)
    res.status(200).send(updated)
} 

//movie delete
const moviedlt = async(req,res)=>{
    const {id} = req.params
    const data = await movie.findByIdAndDelete(id)
    res.send({message: "Movie deleted"})
}
 
//add rating

const rating = async(req,res)=>{
    const {id} = req.params
    if(id){
        let data = await movie.findById(id)
        data.ratings.push({value : req.body.rating})
        await data.save()
        console.log(data);
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }

}

// add comment

const comment = async(req,res)=>{
    const {id} = req.params
    if(id){
        const data = await movie.findById(id)
        data.comments.push(req.body)
        await data.save()
        res.send(data)
    }
    else{
        res.send({error: "movie not found"})
    }
}

// filter

const filter = async(req,res)=>{
    let filterdata = await movie.find(req.query)
    res.send(filterdata)
}

module.exports = {welcome,signup,dlt,login,alldata,moviecreate,movieupdate,moviedlt,filter,rating,comment}