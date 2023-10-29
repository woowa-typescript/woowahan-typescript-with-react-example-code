const user_B = {
  id: 5,
  email: "wrong@woowahan.email",
  name: 4,
};

isUser(user_B); // error TS2345: Argument of type '{ id: number; email: string; name: number; }' is not assignable to parameter of type '{ id: number; email: string; name: string; }'
