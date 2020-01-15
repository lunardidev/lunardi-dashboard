import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import { isAuthenticated } from "./auth";

import { SignIn, SignUp, NotFound, Default } from "./views";

import { Clean, Dashboard } from "./layouts";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const routes = [
  {
    path: "/",
    title: "Sign In",
    Component: SignIn,
    Layout: Clean,
    privateComponent: false,
    transitionClass: "fade-transition"
  },
  {
    path: "/sign-in",
    title: "Sign In",
    Component: SignIn,
    Layout: Clean,
    privateComponent: false,
    transitionClass: "fade-transition"
  },
  {
    path: "/sign-up",
    title: "Sign Up",
    Component: SignUp,
    Layout: Clean,
    privateComponent: false,
    transitionClass: "fade-transition"
  },
  {
    path: "/dashboard",
    title: "Dashboard",
    Component: Default,
    Layout: Dashboard,
    privateComponent: false,
    transitionClass: ""
  }
];

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />
      ) : (
        <Redirect to={{ pathname: "/", state: { from: props.location } }} />
      )
    }
  />
);

const Routes = () => (
  <BrowserRouter>
    <TransitionGroup>
      <Switch>
        {routes.map(
          ({
            title,
            path,
            Component,
            Layout,
            privateComponent,
            transitionClass
          }) =>
            !privateComponent ? (
              <Route exact key={path} path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames={transitionClass}
                    unmountOnExit
                  >
                    <div className={transitionClass}>
                      <Layout title={title}>
                        <Component />
                      </Layout>
                    </div>
                  </CSSTransition>
                )}
              </Route>
            ) : (
              <PrivateRoute exact key="0" path={path}>
                {({ match }) => (
                  <CSSTransition
                    in={match != null}
                    timeout={300}
                    classNames={transitionClass}
                    unmountOnExit
                  >
                    <div className={transitionClass}>
                      <Layout title={title}>
                        <Component />
                      </Layout>
                    </div>
                  </CSSTransition>
                )}
              </PrivateRoute>
            )
        )}
        <Route>
          <div className="fade-transition">
            <NotFound title="Not Found" />
          </div>
        </Route>
      </Switch>
    </TransitionGroup>
  </BrowserRouter>
);

export default Routes;
