export const fetchPriceInfo = (): Promise<MobileApiResponse<PriceInfo>> => {
  const priceUrl = "https: ~~~"; // url 주소

  return request({
    method: "GET",
    url: priceUrl,
  });
};

export const fetchOrderInfo = (): Promise<MobileApiResponse<Order>> => {
  const orderUrl = "https: ~~~"; // url 주소

  return request({
    method: "GET",
    url: orderUrl,
  });
};
