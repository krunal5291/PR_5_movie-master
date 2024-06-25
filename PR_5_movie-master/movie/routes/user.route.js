const {Router} = require('express')
const {signup, dlt, login, welcome,alldata, moviecreate, movieupdate, moviedlt, filter, rating, comment } = require('../controllers/user.contoller')
const { signupmiddle, signinmiddle, moviemiddle } = require('../middleware/user.middleware')
const router = Router()

// user 
router.get('/',welcome)
router.post('/user/signup',signupmiddle,signup)
router.post('/user/login',signinmiddle,login)
router.delete('/user/delete/:id',dlt)
router.get('/user/',alldata)

// movie
router.post('/movie/create',moviemiddle,moviecreate)
router.patch('/movie/update/:id',movieupdate)
router.patch('/movie/rating/:id',rating)
router.patch('/movie/comment/:id',comment)
router.get('/movie/filter',filter)
router.delete('/movie/delete/:id',moviedlt)


module.exports = {router}