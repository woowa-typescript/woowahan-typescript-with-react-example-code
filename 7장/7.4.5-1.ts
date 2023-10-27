const useMock = Object.is(REACT_APP_MOCK, "true");

const mockFn = ({ status = 200, time = 100, use = true }: MockResult) =>
  use &&
  mock.onGet(/\/order\/list/).reply(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            status,
            status === 200 ? fetchOrderListSuccessResponse : undefined,
          ]);
        }, time)
      )
  );

if (useMock) {
  mockFn({ status: 200, time: 100, use: true });
}
