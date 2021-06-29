import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LayoutAdmin from "./layout/LayoutAdmin";
import LayoutWebsite from "./layout/LayoutWebsite";
import HomePage from "./components/Pages/website/HomePage";
import ProductPage from "./components/Pages/website/productPage";
import Header from "./components/header";
import Footer from "./components/footer";
import News from "./components/Pages/website/news";
import About from "./components/Pages/website/about";
import Signup from "./components/Pages/website/signup";
import Signin from "./components/Pages/website/signin";
import Detail from "./components/Pages/website/productPage/detail";
import PageNotFound from "./components/Pages/website/PageNotFound";
const Routes = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/admin/:path?">
          <LayoutAdmin></LayoutAdmin>
        </Route>
        <Route>
          <Header {...props}/>
          <Switch>
            <LayoutWebsite>
              <Route exact path="/">
                <HomePage {...props}></HomePage>
              </Route>
              <Route exact path="/products">
                <ProductPage {...props}></ProductPage>
              </Route>
              <Route path="/products/:id">
                <Detail {...props}></Detail>
              </Route>
              <Route path="/news">
                <News {...props}></News>
              </Route>
              <Route path="/about">
                <About {...props}></About>
              </Route>
              <Route path="/signup">
                <Signup {...props}></Signup>
              </Route>
              <Route path="/signin">
                <Signin {...props}></Signin>
              </Route>
            </LayoutWebsite>
          </Switch>
          <Footer />
        </Route>
       
      </Switch>
    </Router>
  );
};

export default Routes;
