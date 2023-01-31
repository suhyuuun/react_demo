import { useEffect, useRef } from "react";

const MyuseRef002 = () => {
  const nameRef = useRef("");

  const handleBtn = () => {
    console.log(nameRef.current);
    console.log(nameRef.current.value);
    nameRef.current.value = "";
  };

  useEffect(() => {
    nameRef.current.focus();
  }); //렌더링은 useEffect가 가장 마지막 실행됨

  return (
    <div>
      <input type="text" placeholder="이름입력" ref={nameRef} />
      <button onClick={handleBtn}>Click</button>
    </div>
  );
};

export default MyuseRef002;
