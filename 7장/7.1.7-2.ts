import { Infer, number, object, string } from "superstruct";

const User = object({
  id: number(),
  email: string(),
  name: string(),
});

type User = Infer<typeof User>;
