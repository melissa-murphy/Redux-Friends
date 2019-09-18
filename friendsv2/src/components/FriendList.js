import React from 'react';

function FriendList(props) {
  return (
    <div className="friend info">
      {props.friends.map(friend => (
        <div className="friend-card" key={friend.id}>
        <h4>{friend.name}</h4>
        <p>{friend.age}</p>
        <p>{friend.height}</p>
        <button onClick={() => props.removeFriends(friend.id)}>-friend</button>
        </div>
      ))}
    </div>
  );
}

export default FriendList;
