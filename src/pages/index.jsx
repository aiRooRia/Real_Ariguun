// import { ParentComponent } from "@/components/Test";
// import { Card } from "../components/Card";
// import { List } from "../components/Card";
// import Text from "@/components/Container";
// import styles from "@/styles/Home.module.css";

// export default function Home() {
//   return (
//     <div className={styles.center}>
//       <div className={styles.flex}>
//         <Card />
//       </div>
//       {/* <Text />
//       <ParentComponent /> */}
//     </div>
//   );
// }
// import { useState } from "react";
// const styles = {
//   center: {
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     flexDirection: "column",
//   },
// };

// export default function Home() {
//   const [number, setNumber] = useState[0];
//   const plus = (text) => {
//     setNumber(number + 1);
//     console.log("darlaa" + " " + number);
//   };
//   return (
//     <div style={styles.center}>
//       <p>{number}</p>
//       <div>
//         <button onClick={() => plus("Ariguunda")}>+</button>
//         <button>-</button>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";

const styles = {
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
};

export default function Home() {
  const [number, setNumber] = useState(0);

  const plus = () => {
    setNumber(number + 1);
    console.log("darlaa" + " " + number);
  };
  const hasah = () => {
    setNumber(number - 1);
    console.log("darlaa" + " " + number);
  };

  return (
    <div style={styles.center}>
      <p>{number}</p>
      <div>
        <button onClick={plus}>+</button>
        <button onClick={hasah}>-</button>
      </div>
    </div>
  );
}
