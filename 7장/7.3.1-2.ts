function isServerError(error: unknown): error is AxiosError<ErrorResponse> {
  return axios.isAxiosError(error);
}
