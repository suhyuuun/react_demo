import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./commonApi/todoApi";
import Input from "./components/input2";
import Todo from "./components/todo2";
import { InputContext } from "./contexts/InputContext";
import { TodoContext } from "./contexts/TodoContext";

//상태전달 : Context Api + useContext()
function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    //여기에서 DB접근하는 거 적용
    //npm install axios
    await axios
      .get(baseUrl + "/todo/all")
      .then((response) => {
        //console.log(response.data);
        // console.log("비동기화 내부");
        setTodos(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    // console.log("비동기화 외부");
  }

  //@PostMapping("/todo")
  const insertTodo = async (e) => {
    e.preventDefault();
    await axios
      .post(baseUrl + "/todo", { todoname: input })
      .then((response) => {
        console.log(response.data);
        setInput("");
        getTodos();
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log("할일 추가됨~.~");
  };

  const handleChangeText = (e) => {
    setInput(e.target.value);
  };

  const updateTodo = async (id, completed) => {
    await axios
      .put(baseUrl + "/todo/" + id + "/" + completed)
      .then((response) => {
        setTodos(
          todos.map((todo) =>
            todo.id === id
              ? { ...todo, completed: todo.completed === 1 ? 0 : 1 }
              : todo
          )
        );
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteTodo = async (id) => {
    await axios
      .delete(baseUrl + "/todo/" + id)
      .then((response) => {
        setTodos(todos.filter((todo) => todo.id !== id));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    console.log("input:" + input);
  }, [input]);

  return (
    <div className="App" style={wrap}>
      <h1>TODO LIST2(Context Api)</h1>
      <InputContext.Provider value={{ input, insertTodo, handleChangeText }}>
        <Input />
      </InputContext.Provider>
      <TodoContext.Provider value={{ todos, updateTodo, deleteTodo }}>
        <Todo />
      </TodoContext.Provider>
    </div>
  );
}
//updateTodo값에 파라미터값 있어서 onClick에서 바로 처리

export default App;
