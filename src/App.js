import LandingPage from "./components/landingPage";
import Header from "./components/header";
import About from "./components/about";
import Template from "./components/template";
import Register from "./components/register";
import Signin from "./components/signin";
import Contact from "./components/contact";
import Education from "./components/education";
import { Route, Switch } from "react-router-dom";
import Finalize from "./components/finalize";
import { useSelector } from "react-redux";

function App() {
  let state = useSelector((state)=>state);
  let auth = state.authReducer;
  return (
    <>
    <Header/>
    <Switch>
      <Route path="/" exact>
        <LandingPage></LandingPage>
      </Route>
      {/* <Route path="/template" exact>
        <Template></Template>
      </Route> */}
      <Route path="/template" exact component={auth.isAuth?Template:Signin}></Route>
     {/* <Route path="/about" exact></Route> */}
      <Route path="/about" exact>
        <About></About>
      </Route>
      {/* <Route path="/register" exact>
        <Register></Register>
      </Route>
      <Route path="/signin" exact>
        <Signin></Signin>
      </Route>
      <Route path="/contact" exact>
        <Contact></Contact>
      </Route>
      <Route path="/education" exact>
        <Education></Education>
      </Route>
      < Route path="/finalize" exact>
        <Finalize></Finalize>
      </Route> */}
      <Route path="/register" exact component={auth.isAuth? LandingPage:Register}></Route>
      <Route path="/signin" exact component={auth.isAuth? LandingPage:Signin}></Route>
      <Route path="/contact" exact component={auth.isAuth?Contact:Signin}></Route>
      <Route path="/education" exact component={auth.isAuth?Education:Signin}></Route>
      <Route path="/finalize" exact component={auth.isAuth?Finalize:Signin}></Route>
    </Switch>
    </>
  );
}

export default App;
