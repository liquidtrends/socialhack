var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'HeiferHub' });
});

// router.post('/feed', function(req,res) {

// });


module.exports = router;
