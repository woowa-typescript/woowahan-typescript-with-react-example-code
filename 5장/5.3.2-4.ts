type PayMethod =
  | { account: string; card?: undefined; payMoney?: undefined }
  | { account: undefined; card?: string; payMoney?: undefined }
  | { account: undefined; card?: undefined; payMoney?: string };
