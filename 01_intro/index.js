import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";

const PORT = 8080;

const app = new express();

const rootValue = {
  product: () => ({
    id: 123,
    name: "Product 1",
    description: "Product One",
    price: 8.99,
    soldout: false,
  }),
};
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue,
    graphiql: true,
  })
);

app.listen(PORT, () => {
  console.log(`Server started on http://localhost:${PORT}/graphql`);
});
