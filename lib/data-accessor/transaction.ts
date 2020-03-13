export default abstract class Transaction {
  abstract commit(): void

  abstract rollback(err: Error): void
}
