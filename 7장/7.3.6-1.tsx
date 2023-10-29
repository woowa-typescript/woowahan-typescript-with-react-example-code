const JobComponent: React.FC = () => {
  const { isError, error, isLoading, data } = useFetchJobList();
  if (isError) {
    return (
      <div>{`${error.message}가 발생했습니다. 나중에 다시 시도해주세요.`}</div>
    );
  }
  if (isLoading) {
    return <div>로딩 중입니다.</div>;
  }
  return (
    <>
      {data.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </>
  );
};
