enum ItemStatusType {
  DELIVERY_HOLD = "DELIVERY_HOLD", // 배송 보류
  DELIVERY_READY = "DELIVERY_READY", // 배송 준비 중
  DELIVERING = "DELIVERING", // 배송 중
  DELIVERED = "DELIVERED", // 배송 완료
}

const checkItemAvailable = (itemStatus: ItemStatusType) => {
  switch (itemStatus) {
    case ItemStatusType.DELIVERY_HOLD:
    case ItemStatusType.DELIVERY_READY:
    case ItemStatusType.DELIVERING:
      return false;
    case ItemStatusType.DELIVERED:
    default:
      return true;
  }
};
