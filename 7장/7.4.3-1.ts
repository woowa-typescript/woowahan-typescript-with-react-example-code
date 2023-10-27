const mockFetchBrands = (): Promise<FetchBrandsResponse> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: "SUCCESS",
        message: null,
        data: [
          {
            id: 1,
            label: "배민스토어",
          },
          {
            id: 2,
            label: "비마트",
          },
        ],
      });
    }, 500);
  });

const fetchBrands = () => {
  if (useMock) {
    return mockFetchBrands();
  }

  return requester.get("/brands");
};
