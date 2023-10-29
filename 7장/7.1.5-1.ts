import { AxiosPromise } from "axios";
import {
  FetchCartResponse,
  PostCartRequest,
  PostCartResponse,
  apiRequester,
} from "./7.1.3-1";

export interface Response<T> {
  data: T;
  status: string;
  serverDateTime: string;
  errorCode?: string; // FAIL, ERROR errorMessage?: string; // FAIL, ERROR
}
const fetchCart = (): AxiosPromise<Response<FetchCartResponse>> =>
  apiRequester.get<Response<FetchCartResponse>>("cart");

const postCart = (
  postCartRequest: PostCartRequest
): AxiosPromise<Response<PostCartResponse>> =>
  apiRequester.post<Response<PostCartResponse>>("cart", postCartRequest);
