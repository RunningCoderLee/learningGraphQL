var express = require('express');
var router = express.Router();
import { graphql } from 'graphql';
import demo from '../schemas/demo';



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('graphql.ejs');
});

router.post('/', (req, res) => {
  //GraphQL executor
  graphql(demo, req.body)
  .then((result) => {
    res.send(JSON.stringify(result, null, 2));
  })
});


module.exports = router;