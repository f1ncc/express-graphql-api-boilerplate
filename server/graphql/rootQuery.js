const {
  GraphQLSchema,
  // buildSchema,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID,
  GraphQLList,
  GraphQLNonNull,
  GraphQLInt,
} = require('graphql');
const _ = require('lodash');
const axios = require('axios');
const Book = require('./types/bookType');
const Author = require('./types/AuthorType');
// const bookResolver = require('./resolvers/bookResolver');
// const authorResolver = require('./resolvers/authorResolver');
// const { books, authors } = require('./../dev-data/dummy-data');

const String = GraphQLString;
const Object = GraphQLObjectType;
const ID = GraphQLID;
const Schema = GraphQLSchema;
const List = GraphQLList;
const Int = GraphQLInt;

const RootQuery = new Object({
  name: 'RootQuery',
  fields: {
    book: {
      type: Book,
      args: { id: { type: ID } },
      resolve(parent, args) {
        // return _.find(books, { id: args.id });
        // return _.find(data[0], { id: args.id });
        return (
          axios
            .get('http://localhost:3000/books/' + args.id)
            // .then((res) => _.find(res[0], { id: args.id }));
            .then((res) => res.data)
        );
      },
    },
    books: {
      type: new List(Book),
      resolve(parent, args) {
        // return books;
        // return data[0];
        return axios.get('http://localhost:3000/books').then((res) => res.data);
      },
    },
    author: {
      type: Author,
      args: { id: { type: ID } },
      resolve(parent, args) {
        // return _.find(authors, { id: args.id });
        // return _.find(data[1], { id: args.id });
        return axios
          .get('http://localhost:3000/authors/' + args.id)
          .then((res) => res.data);
      },
    },
    authors: {
      type: new List(Author),
      resolve(parent, args) {
        // return authors;
        // return data[1];
        return axios
          .get('http://localhost:3000/authors')
          .then((res) => res.data);
      },
    },
  },
});

const mutation = new Object({
  name: 'Mutation',
  fields: {
    addBook: {
      type: Book,
      args: {
        name: { type: new GraphQLNonNull(String) },
        genre: { type: new GraphQLNonNull(String) },
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/books', {
            name: args.name,
            genre: args.genre,
          })
          .then((res) => res.data);
      },
    },
    deleteBook: {
      type: Book,
      args: { id: { type: new GraphQLNonNull(ID) } },
      resolve(parentValue, args) {
        return axios
          .delete('http://localhost:3000/books/' + args.id)
          .then((res) => res.data);
      },
    },
    editBook: {
      type: Book,
      args: {
        id: { type: new GraphQLNonNull(ID) },
        name: { type: String },
        genre: { type: String },
      },
      resolve(parentValue, args) {
        return axios
          .patch('http://localhost:3000/books/' + args.id, args)
          .then((res) => res.data);
      },
    },
    addAuthor: {
      type: Author,
      args: {
        name: { type: new GraphQLNonNull(String) },
        age: { type: new GraphQLNonNull(Int) },
      },
      resolve(parentValue, args) {
        return axios
          .post('http://localhost:3000/authors', {
            name: args.name,
            age: args.age,
          })
          .then((res) => res.data);
      },
    },
    deleteAuthor: {
      type: Author,
      args: { id: { type: new GraphQLNonNull(ID) } },
      resolve(parentValue, args) {
        return axios
          .delete('http://localhost:3000/authors/' + args.id)
          .then((res) => res.data);
      },
    },
    editAuthor: {
      type: Author,
      args: {
        id: { type: new GraphQLNonNull(ID) },
        name: { type: String },
        age: { type: Int },
      },
      resolve(parentValue, args) {
        return axios
          .patch('http://localhost:3000/authors/' + args.id, args)
          .then((res) => res.data);
      },
    },
  },
});

module.exports = new Schema({
  query: RootQuery,
  mutation,
});
