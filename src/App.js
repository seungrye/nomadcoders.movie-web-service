import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(prev => prev + 1);

  const runOnlyOnce = () => console.log("I run only once time");
  useEffect(runOnlyOnce, []);

  return (
    <div>
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />
    </div>
  );
}

export default App;
