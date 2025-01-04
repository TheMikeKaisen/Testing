# **Testing an express app**

Let’s say we have an express app that doesnt have any DB connections

- Initialize a simple TS project

```jsx
npm init -y
npx tsc --init
```

- Change rootDir and srcDir

```jsx
"rootDir": "./src",
"outDir": "./dist",
```

- Add dependencies

```jsx
npm install --save-dev ts-jest  @jest/globals @types/express
npm i supertest @types/supertest
npm install express
```

- Initialize jest.config.ts

```jsx
npx ts-jest config:init
```

- Create `src/index.ts`

```jsx
import express from "express";

export const app = express();
app.use(express.json());

app.post("/sum", (req, res) => {
    const a = req.body.a;
    const b = req.body.b;
    const answer = a + b;

    res.json({
        answer
    })
});
```

- Update package.json scripts

```jsx
"test": "jest"
```

- Add `tests/sum.test.ts`

```jsx
import {describe, expect, test, it} from '@jest/globals';
import request from "supertest";
import { app } from "../index"

describe("POST /sum", () => {
    it("should return the sum of two numbers", async () => {
        const res = await request(app).post("/sum").send({
          a: 1,
          b: 2
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.answer).toBe(3);
      });

});

```

- Update jest.config.js

```jsx
/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  testMatch: ["<rootDir>/src/tests/**/*.ts"]
};
```