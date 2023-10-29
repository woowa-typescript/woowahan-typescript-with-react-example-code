const MyComponent = () => {
  const { value, onChange } = useInput("");
  
  return (
    <div>
      <h1>{value}</h1>
      <input onChange= {onChange} value= {text} />
    </div>
  );
};

export default App;