import React, { Component, Suspense, lazy } from 'react';
import AppBar from './AppBar/AppBar';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import PublicRoute from './PublicRoute';
import PrivateRoute from './PrivateRoute';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const HomeView = lazy(() => import('../views/HomeView'));
const RegisterView = lazy(() => import('../views/RegisterView'));
const LoginView = lazy(() => import('../views/LoginView'));
const ContactsView = lazy(() => import('../views/ContactsView'));


class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }
  render() {

    return (
      <div className="Container">
      <AppBar />
      <Suspense fallback={<p>Phonebook is loading...</p>}>
        <Switch>
          <PublicRoute path="/" exact component={HomeView} />
          <PublicRoute
            path="/register"
            restricted
            exact
            redirectTo="/contacts"
            component={RegisterView}
          />
          <PublicRoute
            path="/login"
            restricted
            exact
            redirectTo="/contacts"
            component={LoginView}
          />
          <PrivateRoute
            path="/contacts"
            redirectTo="/login"
            component={ContactsView}
          />
        </Switch>
      </Suspense>
        <ToastContainer autoClose={3700} />
      </div>
    );
  }
}

const mapDispatchToProps = {
  onGetCurrentUser: authOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
