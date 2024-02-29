# GraphQL Demo with Apollo Server Express

Welcome to the GraphQL Demo using Apollo Server Express! This repository contains a simple GraphQL application to showcase how you can build and run a GraphQL server with Apollo Server integrated into an Express application. This project is ideal for those looking to get started with GraphQL and Apollo Server in a Node.js environment.

## Features

- **Apollo Server**: Utilizes Apollo Server as the GraphQL server.
- **Express Integration**: Shows how to integrate Apollo Server with Express, a popular Node.js web application framework.
- **Schema and Resolvers**: Demonstrates how to define a GraphQL schema and write resolvers for handling queries and mutations.
- **Basic Add and Read Operations**: Includes examples of Create and Read operations.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (version 14 or newer)
- npm (usually comes with Node.js)

## Getting Started

Follow these steps to get the application up and running on your local machine:

### 1. Clone the Repository

First, clone this repository to your local machine using Git:

```sh
git clone https://github.com/balazs-varga/graphql-demo.git
cd graphql-demo
```

### 2. Install Dependencies

Navigate to the root directory of the project and install the necessary npm packages:

```sh
npm install
```

### 3. Run the Server

Start the server by running:

```sh
npm start
```

The server will start, and you should see a message indicating that it's running and listening on the specified port (default is 3000).

### 4. Access the GraphQL Playground

With the server running, you can access the Apollo Studio (formerly GraphQL Playground) in your web browser at http://localhost:3000/graphql. This interactive IDE will allow you to execute GraphQL queries and mutations against your API.

### Example Queries and Mutations

Here are some example queries and mutations you can try in Apollo Studio:

##### Query

```graphql
query {
  productsByPrice(min: 10, max: 50) {
    description
    price
  }
  product(id: "bluejean") {
    description
    price
  }
  orders {
    subtotal
    items {
      quantity
      product {
        id
        price
        reviews {
          comment
          rating
        }
      }
    }
  }
}
```

##### Mutation

```graphql
mutation {
  addNewProduct(
    id: "orangejacket"
    description: "Orange Jacket"
    price: 70.55
  ) {
    id
    reviews {
      rating
    }
  }
  showReview: addNewProductReview(id: "redshoe", rating: 5, comment: "Great!") {
    rating
  }
  jacketReview: addNewProductReview(
    id: "orangejacket"
    rating: 3
    comment: "It's too warm."
  ) {
    rating
  }
}
```
