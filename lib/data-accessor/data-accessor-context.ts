/* eslint-disable no-unused-vars */
import Transaction from './transaction';
import DataAccessorFactory from './data-accessor-factory';

export default class DataAccessorContext<F extends DataAccessorFactory, T extends Transaction> {
  client: any;

  factory: new () => F;

  transaction: new (arg) => T;

  constructor(client, factory, transaction) {
    this.register(client, factory, transaction);
  }

  register(client, Factory, transaction): void {
    this.client = client;
    this.transaction = transaction;
    this.factory = new Factory(this.client);
  }

  createTransaction(): Transaction {
    // eslint-disable-next-line new-cap
    return new this.transaction(this.client);
  }
}

/* eslint-enable no-unused-vars */
