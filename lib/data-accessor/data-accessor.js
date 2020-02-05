const InternalServerError = require('../../error/internal-server-error');

/* eslint-disable no-unused-vars,class-methods-use-this */

class DataAccessor {
  createTransaction() {
    throw new InternalServerError('Not implemented.');
  }

  bulkCreate(elements, options) {
    throw new InternalServerError('Not implemented.');
  }

  create(element, options) {
    throw new InternalServerError('Not implemented.');
  }

  existById(id, options) {
    return this.exist({ id }, options);
  }

  exist(query, options) {
    throw new InternalServerError('Not implemented.');
  }

  findById(id, options) {
    return this.findOne({ id }, options);
  }

  findOne(query, options) {
    throw new InternalServerError('Not implemented.');
  }

  findAll(query, options) {
    throw new InternalServerError('Not implemented.');
  }

  updateById(id, element, options) {
    return this.updateOne({ id }, element, options);
  }

  updateOne(query, element, options) {
    throw new InternalServerError('Not implemented.');
  }

  updateAll(query, element, options) {
    throw new InternalServerError('Not implemented.');
  }

  deleteById(id, options) {
    return this.deleteOne({ id }, options);
  }

  deleteOne(query, options) {
    throw new InternalServerError('Not implemented.');
  }

  deleteAll(query, options) {
    throw new InternalServerError('Not implemented.');
  }
}

module.exports = DataAccessor;
/* eslint-enable no-unused-vars,class-methods-use-this */
