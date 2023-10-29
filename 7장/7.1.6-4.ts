interface JobListResponse {
  jobItems: JobListItemResponse[];
}

class JobListItem {
  constructor(item: JobListItemResponse) {
    /* JobListItemResponse에서 JobListItem 객체로 변환해주는 코드 */
  }
}

class JobList {
  readonly totalItemCount: number;
  readonly items: JobListItemResponse[];
  constructor({ jobItems }: JobListResponse) {
    this.totalItemCount = jobItems.length;
    this.items = jobItems.map((item) => new JobListItem(item));
  }
}

const fetchJobList = async (
  filter?: ListFetchFilter
): Promise<JobListResponse> => {
  const { data } = await api
    .params({ ...filter })
    .get("/apis/get-list-summaries")
    .call<Response<JobListResponse>>();

  return new JobList(data);
};
