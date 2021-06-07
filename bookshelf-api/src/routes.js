const {
  addBooksHandler, getAllBooksHandler, getBookByIdHandler, editBookByIdHandler,
  deleteBookByIdHandler, getBookByNameHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBooksHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{id}',
    handler: deleteBookByIdHandler,
  },
  // {
  //   method: 'GET',
  //   path: '/books/{name?}',
  //   handler: getBookByNameHandler,
  // },

];
module.exports = routes;
