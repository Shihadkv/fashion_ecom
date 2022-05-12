var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('user/userhome');
});
router.get('/login',(req,res)=>{
     res.render('user/login')
})
router.get('/signup',(req,res)=>{
  res.render('user/signup')
})
router.get('/product',(req,res)=>{
 res.render('user/product')
})
module.exports = router;
