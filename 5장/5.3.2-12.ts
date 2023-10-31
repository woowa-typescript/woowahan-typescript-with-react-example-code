type Card = {
card: string
};

type Account = {
  account: string
};

type CardOrAccount = PickOne<Card & Account>;

function withdraw (type: CardOrAccount) {
  ...
}

withdraw({ card: "hyundai", account: "hana" }); // 에러 발생
