const [name, setName] = useState("");

useEffect(() => {
  // 매우 긴 시간이 흐른 뒤 아래의 setName()을 실행한다고 생각하자
  setName("배달이");
}, []);

return (
  <div>
    {`안녕하세요, ${name}님!`}
  </div>
);