class JobStore {
  jobs: Job[] = [];
  state: LoadingState = "PENDING"; // "PENDING" | "DONE" | "ERROR"; errorMsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  async fetchJobList() {
    this.jobs = [];
    this.state = "PENDING";
    this.errorMsg = "";

    try {
      const projects = await fetchJobList();

      runInAction(() => {
        this.projects = projects;
        this.state = "DONE";
      });
    } catch (e) {
      runInAction(() => {
        // 에러 핸들링 코드를 작성
        this.state = "ERROR";
        this.errorMsg = e.message;
        showAlert();
      });
    }
  }

  get isLoading(): boolean {
    return state === "PENDING";
  }
}

const JobList = (): JSX.Element => {
  const [jobStore] = useState(() => new JobStore());

  if (jobStore.job.isLoading) {
    return <Loader />;
  }

  return (
    <>
      {jobStore.jobs.map((job) => (
        <Item job={job} />
      ))}
    </>
  );
};
