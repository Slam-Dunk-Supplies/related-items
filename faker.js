var faker = require('faker');
var db = require('./database/index.js');
var products = []

for (var i = 0; i < 100; i++) {
    var product = {
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        description: faker.commerce.productDescription(),
        category: faker.commerce.department(),
        image: faker.image.sports()
    }
    products.push(product)
   
}

for (var product of products) {
    db.postAllProducts(product, function (err, products) {
        if (err) {
            console.log(err)
        }
  
    })
    console.log('posted to db')
}
  


