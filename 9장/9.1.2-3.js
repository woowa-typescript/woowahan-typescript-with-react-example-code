const { id, name } = value;

useEffect(() => {
  // value.name과 value.id 대신 name, id를 직접 사용한다
}, [id, name]);