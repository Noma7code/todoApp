import styles from "./footer.module.css";

export default function Footer({ completedTodos , totalTodos}) {
  return (
    <div>
      <div className={styles.footerDiv}>
        <p className={styles.footer}>Completed todos: {completedTodos}</p>
        <p className={styles.totalTodos}>Total Todos: {totalTodos}</p>
      </div>
    </div>
  );
}
