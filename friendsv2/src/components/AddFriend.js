import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriends } from '../actions';

class AddFriend extends Component {
  constructor() {
    super();
    this.state = {
      newFriend: {
        name: '',
        loading: false,
        error: ''
      }
    };
  }

  addFriend = e => {
    e.preventDefault();
    console.log(`----------add friend fired`);
    this.props.addFriend(this.state.newFriend);
    this.setState({
      newFriend: {
        name: ''
      }
    });
  };

  handleInputChange = e => {
    e.persist();
    console.log(`--------------change handler invoked` + e.target.value);
    this.setState(prevState => ({
      ...this.state,
      newFriend: {
        ...prevState.newFriend,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <div className="add-friend">
        <br />
        <form onSubmit={this.addFriends}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.newFriend.name}
            name="name"
          />
          <button onClick={this.addFriend}>+friend</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('-------------------new friend:' + state.friends.friends);
  return {
    friends: state.friends.friends,
    loading: state.friends.isLoading,
    error: state.friends.error
  };
};
export default connect(
  mapStateToProps,
  { addFriends }
)(AddFriend);
