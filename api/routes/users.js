var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json([
    {id: 1, username: "someone"},
    {id: 2, username: "somebody else"}
    {id: 3, username: "third person"},
  ]);
});

module.exports = router;
