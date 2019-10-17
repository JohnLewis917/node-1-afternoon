const products = require('../products.json')
//started with the line below
// const getProducts =  
// (reg, res, next) => {res.status(200).send(products)}

const getProductsId = (req, res, next) => {
const id = parseInt(req.params.id)
const foundProduct = products.filter(productObj => productObj.id === id)
if(foundProduct.length === 0){
    return res.sendStatus(500)
}else{
    return res.status(200).send(foundProduct)
}}
//moved the original function from line 3 to here
const getProductPrice = (req, res, next) => {
    console.log(req.query.price)
    if(req.query && req.query.price ===true){
    const findPrice = products.filter(productObj => productObj.price >= +req.query.price)
    return res.status(200).send(findPrice)
    }else{
        return res.status(200).send(products)
    }
    
}
module.exports = {
    // getProducts: getProducts, not needed anymore
    getProductsId: getProductsId,
    getProductPrice: getProductPrice

}