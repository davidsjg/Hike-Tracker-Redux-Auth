import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Header from "./components/Header/Header";
import SelectButtons from "./components/SelectButtons/SelectButtons";

function App() {
  return (
    <>
      <div className={styles["mainContain"]}>
        <Header />
        <SelectButtons />
      </div>
    </>
  );
}

export default App;
