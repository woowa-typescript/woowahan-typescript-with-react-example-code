function double(n: number) {
  return n * 2;
}

double(2); // 4
double("z"); // 🚨 Error: Argument of type 'string' is not assignable to parameter of type 'number'.(2345)
