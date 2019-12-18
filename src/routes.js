import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import { isAuthenticated } from './auth';

import SignIn from './components/SignIn';
import SignUp from './components/SignUp';

import Header from './components/Header';

import { TransitionGroup, CSSTransition } from "react-transition-group";

const PrivateRoute = ({component: Component, ...rest}) => (

    <Route
        {...rest}
        render={props =>
            isAuthenticated() ? (
                <Component { ...props } />
            ) : (
                <Redirect to={{ pathname : '/', state: { from: props.location} }} />
            )
        }
    />
)

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={()=> <SignIn />}/>
            <Route exact path="/sign-up" component={()=> <SignUp />}/>
            <PrivateRoute exact path="/dashboard" component={()=> <Header />}/>
        </Switch>
    </BrowserRouter>
);

export default Routes;