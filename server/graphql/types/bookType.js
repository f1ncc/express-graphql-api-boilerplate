const { GraphQLObjectType, GraphQLString, GraphQLID } = require('graphql');

const String = GraphQLString;
const Object = GraphQLObjectType;
const ID = GraphQLID;

const Book = new Object({
  name: 'Book',
  fields: () => ({
    id: { type: ID },
    name: { type: String },
    genre: { type: String },
  }),
});

module.exports = Book;
