import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function Hello() {
  useEffect(() => {
    console.log("created ->");
    return () => console.log("<- destroyed");
  }, []);

  return <h1>Hello</h1>;
}

function App() {
  const [showing, setShowing] = useState(false);
  const onChangeShowing = () => setShowing(prev => !prev);

  const [counter, setCounter] = useState(0);
  const onClick = () => setCounter(prev => prev + 1);

  const [keyword, setKeyword] = useState("");
  const onSearch = (event) => setKeyword(event.target.value);

  useEffect(() => {
    console.log("I run only once");
  }, []);

  useEffect(() => {
    if (keyword !== "" && keyword.length > 5) {
      console.log("SEARCH FOR :", keyword);
    }
  }, [keyword]);

  return (
    <div>
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onChangeShowing}>{showing ? "Hide" : "Show"}</button>
      </div>

      <hr />

      <input type="text" placeholder="search here"
        value={keyword}
        onChange={onSearch}
      />
      <h1 className={styles.title}>{counter}</h1>
      <Button text={"click me"} onClick={onClick} />
    </div>
  );
}

export default App;
