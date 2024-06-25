const signupmiddle= (req,res,next)=>{
    const {email,password,username} = req.body

    if(email&&password&&username){
        next()
    }
    else{
        res.status(400).send('all fields are required')
    }
}
const signinmiddle= (req,res,next)=>{
    const {password,username} = req.body

    if(password&&username){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}
const moviemiddle = (req,res,next)=>{
    const{title,releaseDate,addedBy}= req.body
    if(title&&releaseDate&&addedBy){
        next()
    }
    else{
        res.status(400).send({error: "all fields are required"})
    }
}

module.exports = {signupmiddle,signinmiddle,moviemiddle}