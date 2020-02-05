/* eslint-disable no-unused-vars,class-methods-use-this */

class DataAccessor {
  createTransaction() {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  bulkCreate(elements, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  create(element, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  existById(id, options) {
    return this.exist({ id }, options);
  }

  exist(query, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  findById(id, options) {
    return this.findOne({ id }, options);
  }

  findOne(query, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  findAll(query, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  updateById(id, element, options) {
    return this.updateOne({ id }, element, options);
  }

  updateOne(query, element, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  updateAll(query, element, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  deleteById(id, options) {
    return this.deleteOne({ id }, options);
  }

  deleteOne(query, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }

  deleteAll(query, options) {
    throw new Error('Internal Server Error (500): Not implemented.');
  }
}

module.exports = DataAccessor;
/* eslint-enable no-unused-vars,class-methods-use-this */
