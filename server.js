const path = require('path');
const express = require('express');
const { createHandler } = require('graphql-http/lib/use/express');
const { loadFilesSync } = require('@graphql-tools/load-files');
const { makeExecutableSchema } = require('@graphql-tools/schema');

const typesArray = loadFilesSync('**/*', {
  extensions: ['graphql'],
});
const resolversArray = loadFilesSync(path.join(__dirname, '**/*.resolvers.js'));

const schema = makeExecutableSchema({
  typeDefs: typesArray,
  resolvers: resolversArray,
});

const app = express();
app.use(
  '/graphql',
  createHandler({
    schema: schema,
  })
);

app.listen(3000, () => {
  console.log('Running GraphQL server...');
});