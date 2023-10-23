class Developer {
  name: string;

  sleepingTime: number;

  constructor(name: string, sleepingTime: number) {
    this.name = name;
    this.sleepingTime = sleepingTime;
  }
}

const d = typeof Developer; // 값이 ‘function’
type T = typeof Developer; // 타입이 typeof Developer
