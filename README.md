# Testing in MERN Stack

This repository contains a series of projects designed to demonstrate various testing techniques in the MERN stack, ranging from simple unit tests to complex mocking for database operations. Each folder represents a self-contained project with its own documentation, providing detailed explanations and insights.

---

## 📂 Projects Overview

### 1. **Simple Unit Testing with Jest: simple-app-1**

- **Description**: A basic application with two functions, `sum` and `multiply`.
- **Goal**: Implement unit testing using the Jest library.
- **Key Features**:
    - Demonstrates simple and efficient unit tests.
    - Ideal starting point for understanding testing basics.

### 2. **API Testing with Supertest: Express-app-2**

- **Description**: An Express application.
- **Goal**: Perform API call testing using the Supertest library.
- **Key Features**:
    - Introduces API testing for Express applications.
    - Simulates HTTP requests to endpoints and validates responses.

### 3. **Database Mocking with Prisma Client: Vitest-Testing-3**

- **Description**: An application with database connectivity.
- **Goal**: Mock `prismaClient.sum.create` for database operation testing using Vitest and Supertest libraries.
- **Key Features**:
    - Focuses on mocking database operations.
    - Demonstrates how to test applications interacting with databases.

### 4. **Deep Mocking with vitest-mock-extended: Vitest-DeepMocking-4**

- **Description**: A variant of the third project with advanced mocking techniques.
- **Goal**: Use the `vitest-mock-extended` library for deep mocking of Prisma Client.
- **Key Features**:
    - Highlights advanced mocking techniques.
    - Provides a robust approach to handling complex database interactions in tests.