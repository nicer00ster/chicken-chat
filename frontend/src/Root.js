import React from 'react';
import { connect } from 'react-redux';
import Navigation from './components/router/Router';
import {
  screenResize,
  handleInput,
  login,
  logout,
  register,
  fetchUsers,
  sendMessage,
} from './actions';

class Root extends React.Component {
  componentDidMount() {
    this.props.fetchUsers();
    this.updateDimensions();
    window.addEventListener('resize', this.updateDimensions.bind(this));
  }
  updateDimensions() {
    this.props.screenResize(window.innerWidth);
  }
  render() {
    return <Navigation {...this.props} />;
  }
}

const mapStateToProps = ({ app, user, chat }) => ({
  app,
  user,
  chat,
});

const mapDispatchToProps = {
  screenResize,
  handleInput,
  login,
  logout,
  register,
  fetchUsers,
  sendMessage,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
