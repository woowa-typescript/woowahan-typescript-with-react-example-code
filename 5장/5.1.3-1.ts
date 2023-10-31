type PayMethodType<T extends 'card' | 'appcard' | 'bank'> = T extends
  | 'card'
  | 'appcard'
  ? Card
  : Bank;