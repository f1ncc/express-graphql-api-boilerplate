// const {  } = require('graphql')
const _ = require('lodash');
const { authors } = require('./../../dev-data/dummy-data');

const authorResolver = (parent, args) => {
  return _.find(authors, { id: args.id });
};

module.exports = authorResolver;
