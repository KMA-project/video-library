import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Library from "../Pages/Library/Library";
import ScrollTopAndPrivateRoute from "./ScrollTopAndPrivateRoute";
// import { AnimatedSwitch, spring } from "react-router-transition";
// const Account = lazy(() => import("../modules/Account/Account"));
// const Accounting = lazy(() => import("../modules/Accounting/Accounting"));
// const UserCommon = lazy(() => import("../modules/UserManager/UserCommon"));
// const UserManager = lazy(() => import("../modules/UserManager/UserManager"));
// const PageNotFound = lazy(() => import("../modules/PageNotFound/PageNotFound"));
// const Dashboard = lazy(() => import("../modules/Home/Dashboard"));
// const WorkManager = lazy(() => import("../modules/WorkManager/WorkManager"));
// const Notification = lazy(() => import("../modules/Notification/Notification"));
// const NotificationManager = lazy(() => import("../modules/NotificationManager/NotificationManager"));
// const UserDetail = lazy(() => import("../modules/UserDetail/UserDetail"));
// const UserProfile = lazy(() => import("../modules/UserProfile/UserProfile"));
// // const Auth = lazy(() => import("../modules/Auth/Auth"));

const RouterIndex = (
  <BrowserRouter>
    <Switch>
          <Route exact path="/"  component={App} />
          <Route exact path="/login"  component={Login} />
          <ScrollTopAndPrivateRoute exact path="/library" component={Library}/>
    </Switch>
  </BrowserRouter>
);

export default RouterIndex;
