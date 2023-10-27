type User = { id: number; email: string; name: string };

import { assert } from "superstruct";

function isUser(user: User) {
  assert(user, User);
  console.log("적절한 유저입니다.");
}
