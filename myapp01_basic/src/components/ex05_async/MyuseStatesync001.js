import { useState } from "react";

const MyuseStatesync001 = () => {
  const [number, setNumber] = useState(0);

  /*
  React은 state가 변경이 될 때마다 렌더링이 발생한다.
  React 렌더링이 발생되면 배치로 해서 처리한다.
  배치 16ms 단위로 처리한다.
  useState()은 비동기화로 처리한다.
  */

  const handleUpNumber = () => {
    setNumber(number + 1);
    console.log(number);

    setNumber(number + 1);
    console.log(number);

    setNumber(number + 1);
    console.log(number);
  };

  const handleDownNumber = () => {
    setNumber(number - 1);
  };

  return (
    <div>
      <p>{number}</p>
      <button onClick={handleUpNumber}>UP</button>
      <button onClick={handleDownNumber}>DOWN</button>
    </div>
  );
};
export default MyuseStatesync001;
