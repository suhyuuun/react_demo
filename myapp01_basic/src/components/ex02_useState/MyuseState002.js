import { useState } from "react"; // useState는 임포트 필요

const MyuseState002 = () => {
  //const [상태, 상태변경함수] = useState(초기값)

  const [cnt, setCnt] = useState(0);
  const handleClick = (e) => {
    e.preventDefault();
    setCnt(cnt + 1);
  };

  return (
    <div>
      <p>
        cnt: <span>{cnt}</span>
      </p>
      <button onClick={handleClick}>CNT UPDATE</button>
    </div>
  );
};

export default MyuseState002;
