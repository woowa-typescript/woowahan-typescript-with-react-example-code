const MyComponent = () => {
  const { value, onChange } = useInput("");
  
  return (
    <div>
      <h1>{value}</h1>
      <input onChange= {onChange} value= {value} />
    </div>
  );
};

export default MyComponent;