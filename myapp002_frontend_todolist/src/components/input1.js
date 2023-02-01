const Input = (props) => {
  const { input, insertTodo, handleChangeText } = props;
  //값이 아닌 주소가 넘어옴

  return (
    <form onSubmit={insertTodo}>
      <input
        type="text"
        required={true}
        value={input}
        onChange={handleChangeText}
      />
      <input type="submit" value="Create" />
    </form>
  );
};

export default Input;
