// import "../css/style.css";
// export default function OutlineComponent() {
//   return (
//     <div>
//       <h1 className="external-header">This is outline component</h1>
//     </div>
//   );
// }

/*css modules */
import styles from "./outlinecomponent.module.css";
export default function OutlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>This is outline component</h1>
    </div>
  );
}
