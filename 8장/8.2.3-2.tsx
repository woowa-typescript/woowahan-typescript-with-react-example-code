interface Fruit {
  count: number;
}

interface Param {
  [key: string]: Fruit; // type Param = Record<string, Fruit>과 동일
}

const func: (fruits: Param) => void = ({ apple }: Param) => {
  console.log(apple.count);
};

// OK.
func({ apple: { count: 0 } });

// Runtime Error (Cannot read properties of undefined (reading 'count'))
func({ mango: { count: 0 } });
