import { useContext } from "react";
import { InputContext } from "../contexts/InputContext";

const Input = () => {
  const { input, insertTodo, handleChangeText } = useContext(InputContext);
  //ContextAPI는 부모컴포넌트에서 자식컴포넌트로 넘겨주는 일만 함, 상태 관리하지 않음
  //상태관리 : Redux

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
