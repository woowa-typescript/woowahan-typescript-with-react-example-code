ReturnType<
  Record<
    OrderType,
    Partial<
      Record<
        CommonOrderStatus | CommonReturnStatus,
        Partial<Record<OrderRoleType, string[]>>
      >
    >
  >
>;

type CommonStatus = CommonOrderStatus | CommonReturnStatus;

type PartialOrderRole = Partial<Record<OrderRoleType, string[]>>;

type RecordCommonOrder = Record<CommonStatus, PartialOrderRole>;

type RecordOrder = Record<OrderType, Partial<RecordCommonOrder>>;

ReturnType<RecordOrder>;
