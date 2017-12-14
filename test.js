const normalizr = require('normalizr');

const data = {
  categories: [
    {
      id: 1,
      name: 'react',
      path: 'react'
    },
    {
      id: 2,
      name: 'redux',
      path: 'redux'
    },
    {
      id: 3,
      name: 'udacity',
      path: 'udacity'
    }
  ]
};

const category = new normalizr.schema.Entity('category');
const categories = [category];

const normd = normalizr.normalize(data.categories, categories);
console.log(normd);

