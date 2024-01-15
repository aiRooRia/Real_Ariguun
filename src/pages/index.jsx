import { ParentComponent } from "@/components/Test";
import { Card } from "../components/Card";
import { List } from "../components/Card";
import Text from "@/components/Container";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.center}>
      <div className={styles.flex}>
        <Card />
      </div>
      {/* <Text />
      <ParentComponent /> */}
    </div>
  );
}
