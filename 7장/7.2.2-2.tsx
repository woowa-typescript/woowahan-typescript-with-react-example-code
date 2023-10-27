const JobList: React.FC = () => {
  // 비동기 데이터를 필요한 컴포넌트에서 자체 상태로 저장
  const {
    isLoading,
    isError,
    error,
    refetch,
    data: jobList,
  } = useFetchJobList();

  // 간단한 Polling 로직, 실시간으로 화면이 갱신돼야 하는 요구가 없어서 // 30초 간격으로 갱신한다
  useInterval(() => refetch(), 30000);

  // Loading인 경우에도 화면에 표시해준다
  if (isLoading) return <LoadingSpinner />;

  // Error에 관한 내용은 11.3 API 에러 핸들링에서 더 자세하게 다룬다
  if (isError) return <ErrorAlert error={error} />;

  return (
    <>
      {jobList.map((job) => (
        <Job job={job} />
      ))}
    </>
  );
};
