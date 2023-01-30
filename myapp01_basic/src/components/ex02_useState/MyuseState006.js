import { useRef, useState } from "react";
//useRef, useState
const MyuseState006 = () => {
  const inputRef = useRef(null);
  const [input, setInput] = useState("");
  const [userList, setUserList] = useState([
    { id: 1, name: "aaa" },
    { id: 2, name: "bbb" },
    { id: 3, name: "ccc" },
  ]);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const pushNewUser = () => {
    // setUserList([...userList, { id: userList.length + 1, name: input }]);
    // setInput("");

    console.log(inputRef);
    setUserList([
      ...userList,
      { id: userList.length + 1, name: inputRef.current.value },
    ]);
  };

  return (
    <div>
      <input
        type="text"
        ref={inputRef}
        style={{ display: "block" }}
        id="fname"
        value={input}
        onChange={handleChange}
      />

      <button onClick={pushNewUser} style={{ display: "block" }}>
        등록
      </button>
      {userList.map((element, idx) => {
        return (
          <p key={idx}>
            <span>{element.id}</span>
            <span>{element.name}</span>
          </p>
        );
      })}
    </div>
  );
};

export default MyuseState006;
