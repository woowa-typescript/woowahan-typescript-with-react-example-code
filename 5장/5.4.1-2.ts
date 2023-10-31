interface ColorType {
  red: string;
  green: string;
  blue: string;
}

type ColorKeyType = keyof ColorType; // 'red' | ‘green' | ‘blue'
