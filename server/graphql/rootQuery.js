const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const Book = require('./types/bookType');
const Author = require('./types/AuthorType');

const String = GraphQLString;
const Object = GraphQLObjectType;
const ID = GraphQLID;
const Schema = GraphQLSchema;

const RootQuery = new Object({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: ID } },
    },
  },
});

module.exports = new Schema({
  query: RootQuery,
});
