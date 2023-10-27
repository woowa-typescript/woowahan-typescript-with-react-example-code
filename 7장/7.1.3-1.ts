import axios, { AxiosInstance, AxiosPromise } from "axios";

type FetchCartResponse = unknown;
type PostCartRequest = unknown;
type PostCartResponse = unknown;

const apiRequester: AxiosInstance = axios.create({
  baseURL: "https://api.baemin.com",
  timeout: 5000,
});

const fetchCart = (): AxiosPromise<FetchCartResponse> =>
  apiRequester.get<FetchCartResponse>("cart");

const postCart = (
  postCartRequest: PostCartRequest
): AxiosPromise<PostCartResponse> =>
  apiRequester.post<PostCartResponse>("cart", postCartRequest);
