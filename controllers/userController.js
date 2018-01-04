var express = require('express');
var router = express.Router();
const User = require('../db/models/User')

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('connected');
});

module.exports = router;
