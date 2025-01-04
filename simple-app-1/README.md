# Unit Testing - Jest

# **Testing a simple app**

Jest is one of many famous testing frameworks in Typescript

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

- Create `src/index.ts`

```jsx
export function sum(a: number, b: number) {
    return a + b
}
```

- Add ts-jest as a dependency

```jsx
npm install --save-dev ts-jest  @jest/globals
```

- Initialize jest.config.ts

```jsx
npx ts-jest config:init
```

- Update package.json

```jsx
"scripts": {
    "test": "jest"
},
```

- Add tests (index.test.ts)

```jsx
import {describe, expect, it} from '@jest/globals';
import {sum} from '../index';

describe('sum module', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
```

- Run `npm run test`