import { useEffect, useState } from "react";
/*
  useEffect : 컴포넌트가 렌더링될 때마다 특정 작업을 수행하도록 설정한다.
  특정작업(side effect) : Time(setTimeout), Ajax
  useEffect: useEffect는 side effect라는 뜻이다.
  useEffect 4가지 종류
  1. useEffect(callback) : 마운트 후, 리렌더링 될때마다 수행
  2. useEffect(callback,[]) : 마운트 후
  3. useEffect(callback, [state]) : 마운트 후, state
  4. useEffect(callback() { return();}, []) : 마운트 후, 언마운트 전(컴파운트가 종료되기 전)
*/

const MyuseEffect001 = () => {
  const [name, setName] = useState("");
  const [nickName, setNickName] = useState("");

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeNickName = (e) => {
    setNickName(e.target.value);
  };

  useEffect(() => {
    console.log("렌더링되었습니다");
  });

  useEffect(() => {
    console.log("렌더링 Name: " + name);
  }, [name]);

  useEffect(() => {
    console.log("렌더링 NickName: " + nickName);
  }, [nickName]);

  useEffect(() => {
    console.log("렌더링 Name : " + name + " NickName : " + nickName);
  }, [name, nickName]);

  useEffect(() => {
    console.log("렌더링 return : " + name);
    return () => {
      console.log("clean up");
    };
  }); //대괄호 없으므로 렌더링될때마다 수행
  return (
    <div>
      <div>
        <input
          type="text"
          value={name}
          onChange={onChangeName}
          placeholder="name"
        />
        <input
          type="text"
          value={nickName}
          onChange={onChangeNickName}
          placeholder="nickName"
        />
      </div>
      <div>
        <b>이름: </b> {name}
      </div>

      <div>
        <b>닉네임: </b> {nickName}
      </div>
    </div>
  );
};

export default MyuseEffect001;
