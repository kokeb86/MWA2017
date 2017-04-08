var express= require('express');
var router= express.Router();
var myinventor= require('../inventors.json')

router.get('/', function(req,res,next){
    res.render('inventor', {data: myinventor });
    
})

module.exports = router;











