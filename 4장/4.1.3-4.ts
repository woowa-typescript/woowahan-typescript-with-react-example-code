/* 배달 팁 */
interface DeliveryTip {
  tip: string;
  }
/* 별점 */
interface StarRating {
  rate: number;
}
/* 주문 필터 */
type Filter = DeliveryTip & StarRating;

const filter: Filter = {
  tip: “1000원 이하”,
  rate: 4,
};