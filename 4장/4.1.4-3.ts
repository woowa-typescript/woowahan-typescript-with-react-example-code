interface DeliveryTip {
  tip: number;
  }

interface Filter extends DeliveryTip {
  tip: string;
  // Interface ‘Filter’ incorrectly extends interface ‘DeliveryTip’
  // Types of property ‘tip’ are incompatible
  // Type ‘string’ is not assignable to type ‘number’
}
