const express = require('express')
const products = require('../products.json')
const getProducts = require('./getProducts')

const app = express()

const port = 4001

app.get('/api/products', getProducts.getProductPrice)
// app.get('/api/products', getProducts.getProducts) not needed anymore
app.get('/api/products/:id', getProducts.getProductsId)





app.listen(4001, () => {console.log('listening on port 4001')})