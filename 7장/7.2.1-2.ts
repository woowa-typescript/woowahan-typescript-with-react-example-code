enum ApiCallStatus {
  Request,
  None,
}

const API = axios.create();

const setAxiosInterceptor = (store: EnhancedStore) => {
  API.interceptors.request.use(
    (config: AxiosRequestConfig) => {
      const { params, url, method } = config;
      store.dispatch(
        // API 상태 저장을 위해 redux reducer `setApiCall` 함수를 사용한다 // 상태가 `요청됨`인 경우 API가 Loading 중인 상태
        setApiCall({
          status: ApiCallStatus.Request, // API 호출 상태를 `요청됨`으로 변경
          urlInfo: { url, method },
        })
      );
      return config;
    },
    (error) => Promise.reject(error)
  );
  // onSuccess 시 인터셉터로 처리한다
  API.interceptors.response.use(
    (response: AxiosResponse) => {
      const { method, url } = response.config;
      store.dispatch(
        setApiCall({
          status: ApiCallStatus.None, // API 호출 상태를 `요청되지 않음`으로 변경
          urlInfo: { url, method },
        })
      );
      return response?.data?.data || response?.data;
    },
    (error: AxiosError) => {
      const {
        config: { url, method },
      } = error;
      store.dispatch(
        setApiCall({
          status: ApiCallStatus.None, // API 호출 상태를 `요청되지 않음`으로 변경
          urlInfo: { url, method },
        })
      );
      return Promise.reject(error);
    }
  );
};
