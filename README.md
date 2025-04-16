# GraphQL essential training

## Intro

### Setup

```sh
pnpm add graphql express-graphql
```

```js

import express from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./data/schema.js";

const PORT = 8080;

const app = new express();

const rootValue = { hello: () => "Ciao Mario!" };
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
```

### Schema

Blue print of data handled by GraphQL.

´´´js

```

