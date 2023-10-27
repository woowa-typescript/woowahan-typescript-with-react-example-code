export const apiRequester: AxiosInstance = axios.create({
  baseURL: orderApiBaseUrl,
  ...defaultConfig,
});

export const httpSuccessHandler = (response: AxiosResponse) => {
  if (response.data.status !== "SUCCESS") {
    throw new CustomError(response?.data.message, response);
  }

  return response;
};

apiRequester.interceptors.response.use(httpSuccessHandler, httpErrorHandler);

const createOrder = (data: CreateOrderData) => {
  try {
    const response = apiRequester.post("https://...", data);

    successHandler(response);
  } catch (error) {
    // status가 SUCCESS가 아닌 경우 에러로 전달된다
    errorHandler(error);
  }
};
