import {
  assert,
  is,
  validate,
  object,
  number,
  string,
  array,
} from "superstruct";

const Article = object({
  id: number(),
  title: string(),
  tags: array(string()),
  author: object({
    id: number(),
  }),
});

const data = {
  id: 34,
  title: "Hello World",
  tags: ["news", "features"],
  author: {
    id: 1,
  },
};

assert(data, Article);
is(data, Article);
validate(data, Article);
