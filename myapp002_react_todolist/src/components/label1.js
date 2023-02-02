const Label = (props) => {
  const { todo, updateTodo, deleteTodo } = props;
  return (
    <h3>
      <label
        className={todo.completed ? "completed" : null}
        onClick={() => updateTodo(todo.id, todo.completed)}
      >
        {/* onClick : 실제 실행하는 부분 */}
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
  );
};

export default Label;
