# **Deep mocking**

Another way to `mock` variables is to let `vitest` figure out the types and mock out all the attributes of the object being mocked.

For example, the `prismaClient` object has a lot of functions -

```jsx
console.log(Object.keys(prismaClient))
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2F8253ea0c-2b58-428b-9c7b-60d3fc5dddd6%2FScreenshot_2024-05-12_at_2.33.03_PM.png?table=block&id=69943758-2be0-4680-98c4-69d2979022af&cache=v2)

What if we could mock out all these keys in a single function call?

### **Deep mocking**

- Install vitest-mock-extended

```jsx
npm i -D vitest-mock-extended
```

- Create `__mocks__/db.ts`

```jsx
import { PrismaClient } from '@prisma/client'
import { beforeEach } from 'vitest'
import { mockDeep, mockReset } from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()
```

- Remove the `mock` we added in `index.test.ts` , simply add a `vi.mock("../db")`

```jsx
// vi.mock('../db', () => ({
//   prismaClient: { sum: { create: vi.fn() }}
// }));
vi.mock('../db');
```

- Try running the tests

```jsx
npm run test
```

![notion image](https://www.notion.so/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2F085e8ad8-528e-47d7-8922-a23dc4016453%2Fbb7b86d7-eae2-4825-83e0-44db90a93d50%2FScreenshot_2024-05-12_at_2.40.48_PM.png?table=block&id=78ced1f5-5bd4-42a9-ba18-89fe124034cb&cache=v2)

