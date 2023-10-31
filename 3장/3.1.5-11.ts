const httpStatusFromPaths: [number, string, ...string[]] = [
  400,
  "Bad Request",
  "/users/:id",
  "/users/:userId",
  "/users/:uuid",
];
// 첫 번째 자리는 숫자(400), 두 번째 자리는 문자열(‘Bad Request’)을 받아야 하고, 그 이후로는 문자열 타입의 원소를 개수 제한 없이 받을 수 있음
