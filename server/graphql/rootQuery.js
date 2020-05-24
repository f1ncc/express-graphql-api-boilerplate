const {
  GraphQLSchema,
  // buildSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
} = require('graphql');
const _ = require('lodash');
const Book = require('./types/bookType');
const Author = require('./types/AuthorType');
// const bookResolver = require('./resolvers/bookResolver');
// const authorResolver = require('./resolvers/authorResolver');
const { books, authors } = require('./../dev-data/dummy-data');

const String = GraphQLString;
const Object = GraphQLObjectType;
const ID = GraphQLID;
const Schema = GraphQLSchema;
const List = GraphQLList;

const RootQuery = new Object({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: ID } },
      resolve(parent, args) {
        return _.find(books, { id: args.id });
      },
    },
    books: {
      type: new List(Book),
      resolve(parent, args) {
        return books;
      },
    },
    author: {
      type: Author,
      args: { id: { type: ID } },
      resolve(parent, args) {
        return _.find(authors, { id: args.id });
      },
    },
    authors: {
      type: new List(Author),
      resolve(parent, args) {
        return authors;
      },
    },
  },
});

module.exports = new Schema({
  query: RootQuery,
});
