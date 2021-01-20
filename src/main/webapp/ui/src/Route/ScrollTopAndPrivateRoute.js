import React, { Component } from 'react';
import { Redirect, Route } from "react-router-dom";
class ScrollTopAndPrivateRoute extends Component {
    render() {
        const {component: Component, ...rest} = this.props;
        const token = sessionStorage.getItem("token_id"); 
        return (
          <Route {...rest} render={(props) => (
            token
                  ? <Component {...props} />
                  : <Redirect to={{
                      pathname: '/login',
                      state: { from: props.location }
                    }} />
              )} />
        );
    }
}

export default ScrollTopAndPrivateRoute;