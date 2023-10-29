// mock/service.ts
const SERVICES: Service[] = [
  {
    id: 0,
    name: "배달의민족",
  },
  {
    id: 1,
    name: "만화경",
  },
];

export default SERVICES;

// api.ts
const getServices = ApiRequester.get("/mock/service.ts");
