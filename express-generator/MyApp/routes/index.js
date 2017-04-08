var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello WMA! This is my First APP from  Express World!' });
});

module.exports = router;
