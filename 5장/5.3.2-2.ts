type Card = {
  type: "card";
  card: string;
};

type Account = {
  type: "account";
  account: string;
};

function withdraw(type: Card | Account) {
  ...
}

withdraw({ type: "card", card: "hyundai" });
withdraw({ type: "account", account: "hana" });
