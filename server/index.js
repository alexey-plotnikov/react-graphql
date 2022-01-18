const express = require('express');
const { graphqlHTTP } = require('express-graphql');

const app = express();

app.use('/graphql', graphqlHTTP({}));

const server = app.listen(5000, () => {
    const address = server.address();
    console.log(`App server now listening to port ${address.port}`);
  });
  