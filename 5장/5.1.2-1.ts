interface PayMethodBaseFromRes {
  financialCode: string;
  name: string;
}
interface Bank extends PayMethodBaseFromRes {
  fullName: string;
}
interface Card extends PayMethodBaseFromRes {
  appCardType?: string;
}
type PayMethodInfo<T extends Bank | Card> = T & PayMethodInterface;
type PayMethodInterface = {
  companyName: string;
  //...
}