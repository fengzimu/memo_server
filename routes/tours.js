var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/hood-river', function(req, res, next) {
  res.render('tours/hood-river');
});

router.get('/request-group-rate', function(req, res, next) {
  res.render('tours/request-group-rate');
});

module.exports = router;
