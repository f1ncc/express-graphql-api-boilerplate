const express = require('express');
const graphqlHTTP = require('express-graphql');
const RootQuery = require('./graphql/rootQuery');
const { config } = require('dotenv');

config();

const app = express();

app.use(
  '/graphql',
  graphqlHTTP({
    schema: RootQuery,
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is at port ${port}`);
});
