// mock/index.ts
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import fetchOrderListSuccessResponse from "fetchOrderListSuccessResponse.json";

interface MockResult {
  status?: number;
  delay?: number;
  use?: boolean;
}

const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

export const fetchOrderListMock = () =>
  mock.onGet(/\/order\/list/).reply(200, fetchOrderListSuccessResponse);

// fetchOrderListSuccessResponse.json
{
    "data": [
        {
            "orderNo": "ORDER1234", "orderDate": "2022-02-02", "shop": {
            "shopNo": "SHOP1234",
            "name": "가게이름1234" },
            "deliveryStatus": "DELIVERY"
        },
    ]
}