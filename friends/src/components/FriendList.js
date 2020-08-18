import React from 'react';
//import Loader from 'react-loader-spinner';
import { axiosWithAuth } from './../utils/axiosWithAuth';

class FriendList extends React.Component {
  state = {
    friends:[]
  }
  
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    axiosWithAuth()
      .get('/api/friends')
      .then(res => {
        //console.log({ res })
        this.setState({ friends: res.data })
        //console.log('getFriends', this.getFriends)
      })
      .catch(err => console.log({ err }));
  };

  render() {
    return (
      <div>
        {this.state.friends.map(friend => (
          <div key={friend.id} className='uk-width-medium uk-card uk-card-default uk-card-body uk-margin'>
            <h3>Name: {friend.name}</h3>
            <p>Age: {friend.age}</p>
            <p>Email: {friend.email}</p>
          </div>)
        )} 
      </div>
    )
  }
}

export default FriendList;
