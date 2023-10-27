class OrderHttpError extends Error {
  private readonly privateResponse: AxiosResponse<ErrorResponse> | undefined;

  constructor(message?: string, response?: AxiosResponse<ErrorResponse>) {
    super(message);
    this.name = "OrderHttpError";
    this.privateResponse = response;
  }

  get response(): AxiosResponse<ErrorResponse> | undefined {
    return this.privateResponse;
  }
}

class NetworkError extends Error {
  constructor(message = "") {
    super(message);
    this.name = "NetworkError";
  }
}

class UnauthorizedError extends Error {
  constructor(message: string, response?: AxiosResponse<ErrorResponse>) {
    super(message, response);
    this.name = "UnauthorizedError";
  }
}
