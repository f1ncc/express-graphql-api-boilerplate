const express = require('express');
const gql = require('express-graphql');
const { config } = require('dotenv');

config();

const app = express();

app.use(
  '/graphql',
  gql({
    graphiql: true,
  })
);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`app is at port ${port}`);
});
