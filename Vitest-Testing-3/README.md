We’re not doing an app.listen here. This is because we dont want the app to actually start when the tests are running. 
Usually you create a `bin.ts` file or `main.ts` file that imports app and actually listens on a port

- Install vitest

```jsx
npm i -D vitest
```

- Add a simple `test/index.test.ts` file

```jsx
import { expect, test } from 'vitest'

test('true === true', () => {
  expect(true).toBe(true)
})
```

- Add a script to test in package.json

```jsx
"test": "vitest"
```

- Add supertest

```jsx
npm i supertest @types/supertest
```

- Update test - Notice all we had to do was update the imports. `vitest` is highly compatible with the jest api


# **Adding a database**

There are two approaches to take when you add external services to your backend.

You can

1. Mock out the external service calls (unit tests).
2. Start the external services when the tests are running and stop them after the tests end (integration/end to end tests)
- Add prisma to your codebase

```jsx
npm i prisma
npx prisma init
```

- Add a basic schema in `schema.prisma`

```jsx
model Sum {
  id          Int @id   @default(autoincrement())
  a           Int
  b           Int
  result      Int
}
```

- Generate the client (notice we don’t need to migrate since we wont actually need a DB)

```jsx
npx prisma generate
```

- Create `src/db.ts` which exports the prisma client. This is needed because we will be mocking this file out eventually

```jsx
import { PrismaClient } from "@prisma/client";
export const prismaClient = new PrismaClient();
```

- Update `src/index.ts` to store the requests in the db

```jsx

app.post("/sum", async (req, res) => {
    const parsedResponse = sumInput.safeParse(req.body)

    if (!parsedResponse.success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const answer = parsedResponse.data.a + parsedResponse.data.b;

    await prismaClient.sum.create({
        data: {
            a: parsedResponse.data.a,
            b: parsedResponse.data.b,
            result: answer
        }
    })

    res.json({
        answer
    })
});

```

- Notice how the tests begin to error out now

# **Mocking dependencies**

Ref - https://vitest.dev/guide/mocking.html

When writing `unit tests` , you `mock out` all `external service` calls.

This means you test the `core` of your logic, and assume the `database calls` would succeed.

This is done so tests can run without starting a `database` / `external services`

### **Mocking**

Mocking, as the name suggests, means `mocking` the behaviour of a file/class/variable when tests are running.

### **Mocking our prismaClient**

To mock out the `prismaClient`, you can add the following code to the top of `index.test.ts`

```jsx
vi.mock('../db', () => ({
  prismaClient: { sum: { create: vi.fn() }}
}));
```

Since we know we are only calling

```jsx
prismaClient.sum.create
```

I have `mocked` the implementation of that function. A `mock` does nothing and returns `undefined` when the function call succeeds.

Try running `npm run test` now. It should succeed