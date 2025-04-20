import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";
import { randomBytes } from "crypto";

const PORT = 8080;

const app = new express();

const rootValue = {
  product: () => ({
    id: 123,
    name: "Product 1",
    description: "Product One",
    price: 8.99,
    soldout: false,
    stores: [
      {
        store: "Store 1",
      },
      {
        store: "Store 2",
      },
    ],
  }),
  creatProduct: ({ input }) => {
    const id = randomBytes(10).toString("hex");
    productDatabase[id] = input;

    return new Product(id, input);
  },
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
