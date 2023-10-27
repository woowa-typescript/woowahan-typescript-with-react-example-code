// Job 목록을 불러오는 훅
const useFetchJobList = () => {
  return useQuery(["fetchJobList"], async () => {
    const response = await JobService.fetchJobList(); // View Model을 사용해서 결과
    return new JobList(response);
  });
};

// Job 1개를 업데이트하는 훅
const useUpdateJob = (
  id: number,
  // Job 1개 update 이후 Query Option
  { onSuccess, ...options }: UseMutationOptions<void, Error, JobUpdateFormValue>
): UseMutationResult<void, Error, JobUpdateFormValue> => {
  const queryClient = useQueryClient();

  return useMutation(
    ["updateJob", id],
    async (jobUpdateForm: JobUpdateFormValue) => {
      await JobService.updateJob(id, jobUpdateForm);
    },
    {
      onSuccess: (
        data: void, // updateJob의 return 값은 없다 (status 200으로만 성공 판별) values: JobUpdateFormValue,
        context: unknown
      ) => {
        // 성공 시 ‘fetchJobList’를 유효하지 않음으로 설정 queryClient.invalidateQueries(["fetchJobList"]);
        onSuccess && onSuccess(data, values, context);
      },
      ...options,
    }
  );
};
