const mysql = require('mysql');
const mysqlConfig = require('./config.js');

const connection = mysql.createConnection(mysqlConfig);


const getAllProducts = function (callback) {
  var query = 'select * from products';
  connection.query(query, function (err, results) {
    if (err) {
      console.log(err)
    }
    callback(err, results);
  });
}

const postAllProducts = function (product, callback) {
  const params = [product.title, product.price, product.description, product.category, product.image]
  var query = `INSERT INTO products (title, price, description, category, image) VALUES (?, ?, ?, ?, ?)`
  connection.query(query, function (err, results) {
    if (err) {
      console.log(err)
    }
    callback(err, results)
  })
}

module.exports = {
  getAllProducts,
  postAllProducts
};

