interface ListItem {
  id: string;
  content: string;
}

interface ListResponse {
  items: ListItem[];
}
const fetchList = async (filter?: ListFetchFilter): Promise<ListResponse> => {
  const { data } = await api
    .params({ ...filter })
    .get("/apis/get-list-summaries")
    .call<Response<ListResponse>>();

  return { data };
};
