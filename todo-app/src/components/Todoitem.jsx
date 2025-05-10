import styles from "./todoitem.module.css";
export default function Todoitem({ item, todos, setTodos }) {
  function handleDelete(item) {
    //returns all the todos which is not the item been passed condition and use  the function 'setTodos to update it)
    setTodos(todos.filter((todo) => todo !== item));
  }
  // const [completed, setCompleted] = useState(false);
  function handleComplete(name) {
    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodos);
  }
  const className = item.done ? styles.completed : "";
  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={className} onClick={() => handleComplete(item.name)}>
          {item.name}
        </span>
        <button onClick={() => handleDelete(item)} className={styles.delete}>
          Delete
        </button>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
