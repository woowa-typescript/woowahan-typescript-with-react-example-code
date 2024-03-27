export const lazyData = (
  status: number = Math.floor(Math.random() * 10) > 0 ? 200 : 200,
  successData: unknown = defaultSuccessData,
  failData: unknown = defaultFailData,
  time = Math.floor(Math.random() * 1000)
): Promise<any> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve([status, status === 200 ? successData : failData]);
    }, time);
  });

export const fetchOrderListMock = ({
  status = 200,
  delay = 100,
  use = true,
}: MockResult) =>
  use &&
  mock
    .onGet(/\/order\/list/)
    .reply(() =>
      lazyData(status, fetchOrderListSuccessResponse, undefined, delay)
    );
