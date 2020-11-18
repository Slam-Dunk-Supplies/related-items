import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { getAllProducts } from '../database/index.js'


configure({ adapter: new Adapter() });

test("getAllProducts returns an array with a length of 100", done => {
  getAllProducts(function (err, results) {
    if (err) {
      console.log(err);
      done();
    }
    expect(results.length).toBe(100);
    done();
  });
});

test("getAllProducts returns an array of objects containing category, description, id, image, and price keys", done => {
  getAllProducts(function (err, results) {
    if (err) {
      console.log(err);
      done();
    }
    expect(results[0]).toHaveProperty('category', 'description', 'id', 'image', 'price', 'title')
    done();
  });
});


