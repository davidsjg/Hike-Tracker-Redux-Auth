import { Outlet } from "react-router-dom";
import Header from "./components/Header/Header";
import styles from "./App.module.css";

function App() {
  return (
    <>
      <div className={styles["mainContain"]}>
        <Header />
        <Outlet />
      </div>
    </>
  );
}

export default App;
