import React, { Component } from 'react';
import { connect } from 'react-redux';
import PrivateRoute from '../PrivateRoute';

// import './App.css';
import { fetchFriends } from '../actions';
import FriendList from './FriendList';
import AddFriend from './AddFriend';
import Login from './Login';

import { Route, NavLink } from 'react-router-dom';

class App extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(`CDM: fetch friends`);
    this.props.fetchFriends();
  }

  render() {
    return (
      <div className="App">
        <div className="header">
          <h1>Friend List</h1>
          <div className="navlinks">
            <NavLink exact to="/">
              Home
            </NavLink>
          </div>
        </div>
        <PrivateRoute
          exact
          path="/"
          component={props => (
            <FriendList
              {...props}
              friends={this.props.friends}
              removeFriends={this.removeFriends}
            />
          )}
        />
        <Route path="/login" component={Login} />
        <PrivateRoute exact path="/add-friend" component={AddFriend} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // const {friendsReducer} = state;
  // console.log(`---------------------map state to props App` + friendsReducer.friends)
  return {
    friends: state.friends,
    fetchFriends: state.fetchFriends,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchFriends }
)(App);
