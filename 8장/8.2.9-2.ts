// 모든 유저(회원, 비회원)은 id를 갖고 있음
interface User {
  id: string;
}

interface Member extends User {
  nickName: string;
}

let users: Array<User> = [];
let members: Array<Member> = [];

users = members; // OK
members = users; // Error
