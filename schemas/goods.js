import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';
import _ from 'lodash';

let allGoods = [
  {
    id: '1',
    title: '显示器',
    price: 200000,
    pic: 'https://gss0.bdstatic.com/94o3dSag_xI4khGkpoWK1HF6hhy/baike/s%3D220/sign=076e539dd933c895a27e9f79e1137397/267f9e2f07082838177af81eb899a9014c08f140.jpg'
  },
  {
    id: 2,
    title: '键盘',
    price: 100000,
    pic: 'http://image.big5.made-in-china.com/2f0j01bCYTykhnCHof/%E6%A0%87%E5%87%86%E9%94%AE%E7%9B%98%EF%BC%88EK-01%EF%BC%89.jpg'
  }
];

var GoodsItem =  new GraphQLObjectType({
  name: "GoodsItem",
  description: "goods item",
  fields: {
    id: {
      type: GraphQLString,
      description: "goods item id"
    },
    title: {
      type: GraphQLString,
      description: "goods item title"
    },
    price: {
      type: GraphQLString,
      description: "goods item price",
      resolve: function(root, param, context) {
        return (root.price/100).toFixed(2);
      }
    },
    pic: {
      type: GraphQLString,
      description: "goods item pic url"
    }
  }
});

let schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "ItemQuery",
    description: "query goods item",
    fields: {
      item: {
        type: GoodsItem,
        description: "goods item list",
        args: {
          id: {
            type: GraphQLString
          }
        },
        resolve: function(root, obj, ctx) {
          console.log(root)
          return _.find(allGoods, {id: obj.id});
        }
      }
    }
  })
});

export default schema;