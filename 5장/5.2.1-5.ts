type Digit = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type Chunk = `${Digit}${Digit}${Digit}${Digit}`;
type PhoneNumberType = `010-${Chunk}-${Chunk}`;