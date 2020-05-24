const express = require('express');
const graphqlHTTP = require('express-graphql');
const RootQuery = require('./graphql/rootQuery');
const { config } = require('dotenv');
const axios = require('axios');

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
// const data = (async () => {
//   await axios.get('http://localhost:3000/data').then((res) => res.data);
// })();
app.listen(port, async () => {
  // await data;
  console.log(`app is at port ${port}`);
  // console.log(data);
});
