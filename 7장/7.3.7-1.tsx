const successHandler = (response: CreateOrderResponse) => {
  if (response.status === "SUCCESS") {
    // 성공 시 진행할 로직을 추가한다
    return;
  }
  throw new CustomError(response.status, response.message);
};
const createOrder = (data: CreateOrderData) => {
  try {
    const response = apiRequester.post("https://...", data);

    successHandler(response);
  } catch (error) {
    errorHandler(error);
  }
};
