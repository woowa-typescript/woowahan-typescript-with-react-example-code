import axios, { AxiosPromise } from "axios";

// 임시 타이핑
export type HTTPMethod = "GET" | "POST" | "PUT" | "DELETE";

export type HTTPHeaders = any;

export type HTTPParams = unknown;

//
class API {
  readonly method: HTTPMethod;

  readonly url: string;

  baseURL?: string;

  headers?: HTTPHeaders;

  params?: HTTPParams;

  data?: unknown;

  timeout?: number;

  withCredentials?: boolean;

  constructor(method: HTTPMethod, url: string) {
    this.method = method;
    this.url = url;
  }

  call<T>(): AxiosPromise<T> {
    const http = axios.create();
    // 만약 `withCredential`이 설정된 API라면 아래 같이 인터셉터를 추가하고, 아니라면 인터셉터 를 사용하지 않음
    if (this.withCredentials) {
      http.interceptors.response.use(
        (response) => response,
        (error) => {
          if (error.response && error.response.status === 401) {
            /* 에러 처리 진행 */
          }
          return Promise.reject(error);
        }
      );
    }
    return http.request({ ...this });
  }
}

export default API;
