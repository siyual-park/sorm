/* eslint-disable no-unused-vars,class-methods-use-this */
export default abstract class DataAccessor {
  abstract bulkCreate(elements, options?): Array<object>

  abstract create(element, options?): object

  abstract exist(query, options?): boolean

  abstract findOne(query, options?): object

  abstract findAll(query?, options?): Array<object>

  abstract updateOne(query, element, options?): object

  abstract updateAll(query, element, options?): object

  abstract deleteOne(query, options?): boolean

  abstract deleteAll(query?, options?): boolean

  existById(id, options?): boolean {
    return this.exist({ id }, options);
  }

  findById(id, options?): object {
    return this.findOne({ id }, options);
  }

  updateById(id, element, options?): object {
    return this.updateOne({ id }, element, options);
  }

  deleteById(id, options?): boolean {
    return this.deleteOne({ id }, options);
  }
}
/* eslint-enable no-unused-vars,class-methods-use-this */
