# Node.js Express API with MongoDB

This repository contains a simple Node.js Express API integrated with MongoDB, allowing for basic CRUD operations on a "Product" model.

## Setup

1. **Install Dependencies**: Make sure you have Node.js and npm installed. Install project dependencies:

    ```bash
    npm install
    ```

2. **MongoDB Connection**: Replace the MongoDB connection string in `mongoose.connect` with your MongoDB Atlas connection string.

3. **Run the Server**: Start the Node.js server:

    ```bash
    node app.js
    ```

## API Endpoints

### 1. Get Hello Message

- **Endpoint**: `GET /`
- **Description**: Returns a simple hello message.

### 2. Get Blog Message

- **Endpoint**: `GET /blog`
- **Description**: Returns a hello message for the blog.

### 3. Get All Products

- **Endpoint**: `GET /products`
- **Description**: Retrieves all products from the MongoDB database.

### 4. Get a Specific Product

- **Endpoint**: `GET /products/:id`
- **Description**: Retrieves a specific product based on the provided product ID.

### 5. Create a Product

- **Endpoint**: `POST /products`
- **Description**: Creates a new product using the provided JSON data in the request body.

### 6. Update a Product

- **Endpoint**: `PUT /products/:id`
- **Description**: Updates an existing product based on the provided product ID and JSON data in the request body.

### 7. Delete a Product

- **Endpoint**: `DELETE /products/:id`
- **Description**: Deletes a specific product based on the provided product ID.

## Technologies Used

- Node.js
- Express.js
- MongoDB (mongoose)

## Notes

- The project uses the `productModel` defined in the `models` directory for MongoDB schema.

- Ensure your MongoDB Atlas cluster allows connections from your IP address.

- Customize the API according to your application needs.

