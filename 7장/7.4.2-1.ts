// api/mock/brand
import { NextApiHandler } from "next";

const BRANDS: Brand[] = [
  {
    id: 1,
    label: "배민스토어",
  },
  {
    id: 2,
    label: "비마트",
  },
];

const handler: NextApiHandler = (req, res) => {
  // request 유효성 검증
  res.json(BRANDS);
};

export default handler;
