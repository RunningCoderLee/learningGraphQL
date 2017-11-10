var express = require('express');
var router = express.Router();
import { graphql } from 'graphql';
import query from '../schemas/query';
import mutation from '../schemas/mutation';
import goods from '../schemas/goods';



/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('graphql.ejs');
});

router.post('/', (req, res) => {
  //GraphQL executor
  graphql(query, req.body)
  .then((result) => {
    res.send(result);
  })
});

router.post('/mutation', (req, res) => {
  //GraphQL executor
  graphql(mutation, req.body)
  .then((result) => {
    res.send(result);
  })
});

router.post('/goodsItem', (req, res) => {
  //GraphQL executor
  graphql(goods, req.body)
  .then((result) => {
    res.send(result);
  })
});


module.exports = router;