import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "./commonApi/todoApi";

function App() {
  const wrap = {
    width: "500px",
    border: "1px solid black",
    margin: "10px auto",
  };

  //db, backend 주소
  //하지만 매번 잡아주기 힘듦
  //새로운 js를 만들어서 import 활용하기 -> 여러개의 페이지에서 상수값 활용할때
  //const baseUrl = "http://localhost:8090";

  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  //렌더링이 다 끝나고 호출하는 함수
  useEffect(() => {
    getTodos();
  }, []);

  //https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/await
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
      <h1>TODO LIST</h1>
      <form onSubmit={insertTodo}>
        <input
          type="text"
          required={true}
          value={input}
          onChange={handleChangeText}
        />
        <input type="submit" value="Create" />
      </form>
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <h3>
                  <label
                    className={todo.completed ? "completed" : null}
                    onClick={() => updateTodo(todo.id, todo.completed)}
                  >
                    {todo.todoname}
                  </label>

                  <label
                    onClick={() => {
                      deleteTodo(todo.id);
                    }}
                  >
                    &nbsp;&nbsp;삭제
                  </label>
                </h3>
              </div>
            );
          })
        : null}
    </div>
  );
}
//updateTodo값에 파라미터값 있어서 onClick에서 바로 처리

export default App;
