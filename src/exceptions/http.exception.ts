type Status = 400 | 401 | 403 | 404 | 409 | 422 | 429 | 500 | 503

export class HttpExceptionError{
  public readonly status: Status
  public readonly message!: string

  constructor(status: Status, message: string) {
    this.status = status
    this.message = message
  }
}
