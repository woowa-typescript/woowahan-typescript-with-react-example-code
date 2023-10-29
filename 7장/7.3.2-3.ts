const httpErrorHandler = (
  error: AxiosError<ErrorResponse> | Error
): Promise<Error> => {
  let promiseError: Promise<Error>;

  if (axios.isAxiosError(error)) {
    if (Object.is(error.code, "ECONNABORTED")) {
      promiseError = Promise.reject(new TimeoutError());
    } else if (Object.is(error.message, "Network Error")) {
      promiseError = Promise.reject(new NetworkError());
    } else {
      const { response } = error as AxiosError<ErrorResponse>;
      switch (response?.status) {
        case HttpStatusCode.UNAUTHORIZED:
          promiseError = Promise.reject(
            new UnauthorizedError(response?.data.message, response)
          );
          break;
        default:
          promiseError = Promise.reject(
            new OrderHttpError(response?.data.message, response)
          );
      }
    }
  } else {
    promiseError = Promise.reject(error);
  }

  return promiseError;
};
