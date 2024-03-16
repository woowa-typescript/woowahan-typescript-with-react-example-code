import { runInAction, makeAutoObservable } from "mobx";
import type Job from "models/Job";

class JobStore {
  job: Job[] = [];
  constructor() {
    makeAutoObservable(this);
  }
}

type LoadingState = "PENDING" | "DONE" | "ERROR";

class Store {
  job: Job[] = [];
  state: LoadingState = "PENDING";
  errorMsg = "";

  constructor() {
    makeAutoObservable(this);
  }

  async fetchJobList() {
    this.job = [];
    this.state = "PENDING";
    this.errorMsg = "";
    try {
      const jobs = await fetchJobs();
      runInAction(() => {
        this.job = jobs;
        this.state = "DONE";
      });
    } catch (e) {
      runInAction(() => {
        this.state = "ERROR";
        this.errorMsg = e.message;
      });
    }
  }
}
