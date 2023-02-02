import Label from "./label1";

const Todo1 = (props) => {
  const { todos, updateTodo, deleteTodo } = props;
  return (
    <>
      {todos
        ? todos.map((todo) => {
            return (
              <div className="todo" key={todo.id}>
                <Label
                  todo={todo}
                  updateTodo={updateTodo}
                  deleteTodo={deleteTodo}
                />
              </div>
            );
          })
        : null}
    </>
  );
};

export default Todo1;
