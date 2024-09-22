# node-response-handler

A lightweight and flexible Node.js package for standardizing API responses.

## Installation

```bash
npm install node-response-handler
```

## Features

- Standardized response formats for common HTTP scenarios
- Easy-to-use middleware for Express.js applications
- Customizable messages and status codes
- Consistent error handling

## Usage

### Basic Setup

```javascript
const express = require('express');
const responseHandler = require('node-response-handler');

const app = express();

// Use the response handler middleware
app.use(responseHandler);

// Your routes here
```

### Example Usage in Routes

```javascript
app.get('/api/users', (req, res) => {
  // Successful response
  res.success({ data: users, message: 'Users retrieved successfully' });
});

app.post('/api/users', (req, res) => {
  // Bad request example
  if (!req.body.name) {
    return res.badRequest({ message: 'Name is required' });
  }
  
  // Create user logic here
  res.success({ message: 'User created successfully', data: newUser });
});

app.get('/api/users/:id', (req, res) => {
  // Record not found example
  if (!user) {
    return res.recordNotFound({ message: 'User not found' });
  }
  
  res.success({ data: user });
});
```

## API

### Response Methods

- `res.success(data)`
- `res.badRequest(data)`
- `res.internalServerError(data)`
- `res.recordNotFound(data)`
- `res.conflict(data)`
- `res.validationError(data)`
- `res.unauthorized(data)`
- `res.forbidden(data)`

Each method accepts an optional `data` object which can include:

- `message`: Custom message for the response
- `data`: Payload to be sent in the response
- `errors`: For validation errors (only in `validationError`)
- `stack`: Error stack trace (only in `internalServerError`)

### Response Structure

All responses follow this general structure:

```javascript
{
  status: String,
  code: Number,
  message: String,
  data: Object | null
}
```

## Customization

You can customize the response messages and codes by modifying the `responseMessages` and `responseCode` objects in the package.

## Contributing

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](https://github.com/TahaHamdy-MernDev/node-response-handler/issues) if you want to contribute.


