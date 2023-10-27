import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

const getUserToken = () => "";
const getAgent = () => "";
const getOrderClientToken = () => "";
const orderApiBaseUrl = "";
const orderCartApiBaseUrl = "";
const defaultConfig = {};
const httpErrorHandler = () => {};

const apiRequester: AxiosInstance = axios.create({
  baseURL: "https://api.baemin.com",
  timeout: 5000,
});

const setRequestDefaultHeader = (requestConfig: AxiosRequestConfig) => {
  const config = requestConfig;
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json;charset=utf-8",
    user: getUserToken(),
    agent: getAgent(),
  };
  return config;
};

const setOrderRequestDefaultHeader = (requestConfig: AxiosRequestConfig) => {
  const config = requestConfig;
  config.headers = {
    ...config.headers,
    "Content-Type": "application/json;charset=utf-8",
    "order-client": getOrderClientToken(),
  };
  return config;
};

// `interceptors` 기능을 사용해 header를 설정하는 기능을 넣거나 에러를 처리할 수 있다
apiRequester.interceptors.request.use(setRequestDefaultHeader);
const orderApiRequester: AxiosInstance = axios.create({
  baseURL: orderApiBaseUrl,
  ...defaultConfig,
});
// 기본 apiRequester와는 다른 header를 설정하는 `interceptors`
orderApiRequester.interceptors.request.use(setOrderRequestDefaultHeader);
// `interceptors`를 사용해 httpError 같은 API 에러를 처리할 수도 있다
orderApiRequester.interceptors.response.use(
  (response: AxiosResponse) => response,
  httpErrorHandler
);
const orderCartApiRequester: AxiosInstance = axios.create({
  baseURL: orderCartApiBaseUrl,
  ...defaultConfig,
});
orderCartApiRequester.interceptors.request.use(setRequestDefaultHeader);
