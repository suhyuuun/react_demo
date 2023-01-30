import { useState } from "react";

const MyuseState003 = () => {
  const [names, setNames] = useState(["고수", "여진구", "송중기"]);
  const [input, setInput] = useState("");
  const handleChangeName = (e) => {
    setInput(e.target.value);
    console.log(e.target.value);
  };

  const handleClick = () => {
    setNames([input, ...names]); //names=["홍길동"]
    setInput("");
  };
  //여기까지는 js문

  return (
    <div>
      <input type="text" id="fname" onChange={handleChangeName} value={input} />
      <button onClick={handleClick}>ADD</button>
      {/*{names.map((value, index) => {
        return <p key={index}>{value}</p>;
      })} */}
      {/* 중괄호 사용하고 p앞에 return값을 사용 (ellow 함수에서는 return값 필요) */}

      {names.map((value, index) => (
        <p key={index}>{value}</p>
      ))}
      {/* 리턴값이 하나일 경우 소괄호로 묶어주고 return 사용하지 않음 */}
    </div>
  );
  //  return부터 여기까지는 jsx문 사용하기
};

export default MyuseState003;
