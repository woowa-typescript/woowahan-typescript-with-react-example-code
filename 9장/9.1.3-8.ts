// <form> 태그의 submit 함수만 따로 뽑아와서 정의한다
type CreateFormHandle = Pick<HTMLFormElement, "submit">;

type CreateFormProps = {
  defaultValues?: CreateFormValue;
};

const JobCreateForm: React.ForwardRefRenderFunction<CreateFormHandle,
  CreateFormProps> = (props, ref) => {
  // useImperativeHandle Hook을 사용해서 submit 함수를 커스터마이징한다
  useImperativeHandle(ref, () => ({
    submit: () => {
      /* submit 작업을 진행 */
    }
  }));
  
  // ...
}