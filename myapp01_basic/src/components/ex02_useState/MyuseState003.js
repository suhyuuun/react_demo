import { useState } from "react";

const MyuseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = (e) => {
    setNames(input);
    setInput("");
  };

  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
    </div>
  );
};

export default MyuseState003;
