const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLInt,
} = require('graphql');

const String = GraphQLString;
const Object = GraphQLObjectType;
const ID = GraphQLID;
const Int = GraphQLInt;

const Author = new Object({
  name: 'Author',
  fields: () => ({
    id: { type: ID },
    name: { type: String },
    age: { type: Int },
  }),
});

module.exports = Author;
