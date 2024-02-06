import { Route, Routes } from "react-router-dom";
import AboutMe from "./Component/AboutMe";
// import LandingPage from "./Pages/LandingPage";
import HomePage from "./Pages/HomePage";
import MyStack from "./Component/MyStack";
import Project from "./Component/Project";
import Contactus from "./Component/Contactus";

function Routing() {
  return (
    <>
      <Routes>
        {/* <Route exact path={"/"} element={<LandingPage/>}></Route> */}
        <Route exact path={"/about"} element={<AboutMe />}></Route>
        <Route exact path={"/"} element={<HomePage/>}></Route>
        <Route exact path={"/mystack"} element={<MyStack/>}></Route>
        <Route exact path={"/projects"} element={<Project/>}></Route>
        <Route exact path={"/contactus"} element={<Contactus/>}></Route>
      </Routes>
    </>
  );
}

export default Routing;
