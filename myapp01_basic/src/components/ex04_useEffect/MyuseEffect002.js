import { useEffect, useState } from "react";

const MyuseEffect002 = () => {
  let data = 0;
  const [num, setNum] = useState(0);

  const handleData = (e) => {
    console.log((data = data + 1));
  };

  const handleName = (e) => {
    //setNum(e.target.value + 1); //11
    //setNum(parseInt(e.target.value) + 1); //2
    setNum(num + 1);
  };

  useEffect(() => {
    console.log("data: " + data);
  }, [data]);
  // state가 아닌 일반 변수값을 넣을 경우 사용불가
  // []와 의미가 같음

  useEffect(() => {
    console.log("num: " + num);
  }, [num]);

  return (
    <div>
      <input type="text" placeholder="data" onChange={handleData} />
      <input type="text" placeholder="num" onChange={handleName} />
      <button>등록</button>
    </div>
  );
};

export default MyuseEffect002;
