import { Widget } from "./dbConnections";

export const resolvers = {
  getProduct: async ({ id }) => {
    try {
      const prod = await Widget.findById(id);
      return prod;
    } catch (error) {
      throw error;
    }
  },

  creatProduct: ({ input }) => {
    // const id = randomBytes(10).toString("hex");
    // productDatabase[id] = input;
    // return new Product(id, input);
  },
};
