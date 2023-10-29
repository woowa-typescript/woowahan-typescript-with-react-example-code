import { AxiosPromise } from "axios";
import { FetchCartResponse, apiRequester } from "./7.1.3-1";
import { Response } from "./7.1.5-1";

const updateCart = (
  updateCartRequest: unknown
): AxiosPromise<Response<FetchCartResponse>> => apiRequester.get("cart");
