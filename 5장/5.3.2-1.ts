type Card = {
  card: string
};

type Account = {
  account: string
};

function withdraw(type: Card | Account) {
  ...
}

withdraw({ card: "hyundai", account: "hana" });
