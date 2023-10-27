import axios, { AxiosInstance, AxiosPromise } from "axios";

export type FetchCartResponse = unknown;
export type PostCartRequest = unknown;
export type PostCartResponse = unknown;

export const apiRequester: AxiosInstance = axios.create({
  baseURL: "https://api.baemin.com",
  timeout: 5000,
});

export const fetchCart = (): AxiosPromise<FetchCartResponse> =>
  apiRequester.get<FetchCartResponse>("cart");

export const postCart = (
  postCartRequest: PostCartRequest
): AxiosPromise<PostCartResponse> =>
  apiRequester.post<PostCartResponse>("cart", postCartRequest);
