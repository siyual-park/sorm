/* eslint-disable no-unused-vars */
import DataAccessor from './data-accessor';

abstract class DataAccessorFactoryImpl {
  // eslint-disable-next-line class-methods-use-this
  create(document: string): DataAccessor {
    throw new Error('Not implemented.');
  }
}
/* eslint-enable no-unused-vars */

export default DataAccessorFactoryImpl;
