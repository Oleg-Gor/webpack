import { Route, Routes } from "react-router-dom";
import { Suspense, useContext } from "react";
import { Link } from "react-router-dom";
import { Count } from "./components/Count";

import { AboutPageLazy } from "./pages/AboutPage/AboutPage.async";
import { MainPageLazy } from "./pages/MainPage/MainPage.async";

import "./styles/index.scss";
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={classNames("app", { selectable: true }, [theme])}>
      <button onClick={toggleTheme}>change theme</button>
      <Count />
      <div>
        <Link to={"/about"}>About</Link>
        <Link to={"/"}>Main</Link>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={"/about/"} element={<AboutPageLazy />} />
          <Route path={"/"} element={<MainPageLazy />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
