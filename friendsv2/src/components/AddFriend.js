import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addFriends } from './../actions/index';

class AddFriend extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newFriend: {
        name: ''
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
            value={this.state.friend.name}
            name="name"
          />
          <button onClick={this.addFriends}>+friend</button>
        </form>
      </div>
    );
  }
}

export default connect(
  null,
  { addFriends }
)(AddFriend);
