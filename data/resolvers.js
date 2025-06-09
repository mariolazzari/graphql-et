import { randomBytes } from "crypto";
import { Product } from "./Product";

const productDatabase = {};

export const resolvers = {
  getProduct: ({ id }) => {
    return new Product(id, productDatabase[id]);
  },

  creatProduct: ({ input }) => {
    const id = randomBytes(10).toString("hex");
    productDatabase[id] = input;

    return new Product(id, input);
  },
};
