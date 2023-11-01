type Card = { card: string };
type Account = { account: string };

const pickOne1: PickOne<Card & Account> = { card: "hyundai" }; // (O)
const pickOne2: PickOne<Card & Account> = { account: "hana" }; // (O)
const pickOne3: PickOne<Card & Account> = { card: "hyundai", account: undefined }; // (O)
const pickOne4: PickOne<Card & Account> = { card: undefined, account: "hana" }; // (O)
const pickOne5: PickOne<Card & Account> = { card: "hyundai", account: "hana" }; // (X)
