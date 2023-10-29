// API 호출에 관한 api call reducer
const apiCallSlice = createSlice({
  name: "apiCall",
  initialState,
  reducers: {
    setApiCall: (state, { payload: { status, urlInfo } }) => {
      /* API State를 채우는 logic */
    },
    setApiCallError: (state, { payload }: PayloadAction<any>) => {
      state.error = payload;
    },
  },
});

const API = axios.create();

const setAxiosInterceptor = (store: EnhancedStore) => {
  /* 중복 코드 생략 */
  // onSuccess시 처리를 인터셉터로 처리한다
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
      // 401 unauthorized
      if (error.response?.status === 401) {
        window.location.href = error.response.headers.location;

        return;
      }
      // 403 forbidden
      else if (error.response?.status === 403) {
        window.location.href = error.response.headers.location;
        return;
      }
      // 그 외에는 화면에 alert 띄우기
      else {
        message.error(`[서버 요청 에러]: ${error?.response?.data?.message}`);
      }

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
