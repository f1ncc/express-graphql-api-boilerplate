const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
} = require('graphql');
const Book = require('./types/bookType');
const Author = require('./types/AuthorType');
const bookResolver = require('./resolvers/bookResolver');
const authorResolver = require('./resolvers/authorResolver');

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
      resolve(parent, args) {
        bookResolver();
      },
    },
    author: {
      type: Author,
      args: { id: { type: ID } },
      resolve(parent, args) {
        authorResolver();
      },
    },
  },
});

module.exports = new Schema({
  query: RootQuery,
});
