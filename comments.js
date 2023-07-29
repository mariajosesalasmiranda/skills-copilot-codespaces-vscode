// Create web server
// 1. Create a web server
// 2. Create a route for '/' and send a response
// 3. Create a route for '/about' and send a response
// 4. Create a route for '/help' and send a response
// 5. Start and test your work

const path = require('path')
const express = require('express')

const app = express()
const port = 3000

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../public')

// Setup static directory to serve
app.