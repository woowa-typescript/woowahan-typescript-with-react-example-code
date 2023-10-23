interface Developer {
  faceValue: number;
}

interface BankNote {
  faceValue: number;
}

let developer: Developer = { faceValue: 52 };
let bankNote: BankNote = { faceValue: 10000 };

developer = bankNote; // OK
bankNote = developer; // OK
