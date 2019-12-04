import React from "react";
import PropTypes from 'prop-types';
import ReactDOM from "react-dom";
import {connect} from 'react-redux';
import MainPage from "../main-page/main-page.jsx";
import SignIn from '../sign-in/signin.jsx';

function FirstPage(props) {
  const {isAuthorizationRequired} = props;
  return isAuthorizationRequired ? <SignIn/> : <MainPage/>;
}

const App = (props) => {
  return (FirstPage(props));
};

const mapStateToProps = (state, ownProps) => Object.assign({}, ownProps, {
  isAuthorizationRequired: state.DATA.isAuthorizationRequired,
});

App.propTypes = {
  isAuthorizationRequired: PropTypes.bool,
};

export default connect(mapStateToProps)(App);
