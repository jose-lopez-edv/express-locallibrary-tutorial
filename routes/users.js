var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// add from https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/skeleton_website #Challenge yourself 
router.get('/cool', function(req, res, next) {
  res.send('You are so cool');
});

module.exports = router;
