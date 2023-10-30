type PrintUserInfo<U extends User> = (user: U) => void;

let printUser: PrintUserInfo<User> = (user) => console.log(user.id);

let printMember: PrintUserInfo<Member> = (user) => {
  console.log(user.id, user.nickName);
};

printMember = printUser; // OK.
printUser = printMember; // Error - Property 'nickName' is missing in type 'User' but required in type 'Member'.
