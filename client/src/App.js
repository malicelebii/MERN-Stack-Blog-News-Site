import React,{Suspense} from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { Router, Route, Link, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LastNew from "./components/LastNew";
import SignUp from "./components/SignUp";
import NewForm from "./components/NewForm";
import PostPage from "./components/PostPage";
import News from "./components/News";
import Corona from './components/Corona'
import GridLayout from './components/GridLayout'


function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Navbar />
      <div style={{  minHeight: "calc(100vh - 80px)" }}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/news" component={News} />
          <Route exact path="/coronavirus" component={Corona} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/new" component={NewForm} />
          <Route exact path="/news" component={News} />
          <Route exact path="/grid" component={GridLayout} />
          {/* <Route exact path={`/news/:id`} component={PostPage} /> */}
          <Route path="/news/:id" render={(props) => <PostPage {...props} />}/> 
          {/* <Route exact path="/register" component={RegisterPage} /> */}
        </Switch>
      </div>
    </Suspense>
  );
}

export default App;
