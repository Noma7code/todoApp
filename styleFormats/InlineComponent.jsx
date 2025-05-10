/*
import "../css/style.css";
export default function InlineComponent() {
  //inline styling 
  const header = {
    color: "gray",
    fontSize: "50px",
    boxShadow: "0 0 50px yellow",
    width: "fit-content",
    backgroundColor: "",
    backgroundImage: "linear-gradient(to right,violet,red)",
    transform: "rotate(45deg) translate(300px, 100px))",
  }; */

//   return (
//     <div>
//       <h1 style={header}>Inline component</h1>
//       {/* styling with external style sheet */}
//       <h2 className="external-header">External styling</h2>
//     </div>
//   );
// }

/*css module*/

import styles from "./inlinecomponent.module.css";

export default function InlineComponent() {
  return (
    <div>
      <h1 className={styles.header}>Inline component</h1>
    </div>
  );
}
