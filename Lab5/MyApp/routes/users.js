var express = require('express');
var router = express.Router();
//not that much data wil be displaed 
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
