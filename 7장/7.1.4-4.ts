import APIBuilder from "./7.1.4-3";

// ex
type Response<T> = { data: T };
type JobNameListResponse = string[];

const fetchJobNameList = async (name?: string, size?: number) => {
  const api = APIBuilder.get("/apis/web/jobs")
    .withCredentials(true) // 이제 401 에러가 나는 경우, 자동으로 에러를 탐지하는 인터셉터를 사용하게 된다
    .params({ name, size }) // body가 없는 axios 객체도 빌더 패턴으로 쉽게 만들 수 있다
    .build();
  const { data } = await api.call<Response<JobNameListResponse>>();
  return data;
};
