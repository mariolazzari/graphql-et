import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import { resolvers } from "./data/resolvers.js";

const PORT = 8080;

const app = new express();

// middleware
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/graphql`);
});
