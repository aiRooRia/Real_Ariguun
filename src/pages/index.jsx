import { Card } from "../components/Card";
import { List } from "../components/Card";
import Text from "@/components/Container";
export default function Home() {
  return (
    <div style={styles.center}>
      <div style={styles.flex}>
        <Card />
      </div>
      <Text />
    </div>
  );
}

const styles = {
  flex: {
    width: 1400,
    flexWrap: "wrap",
    display: "flex",
    gap: 20,
  },
  center: {
    display: "flex",
    justifyContent: "center",
  },
};
