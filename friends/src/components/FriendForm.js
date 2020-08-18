import React, {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const initialState = {
  name: '',
  age: '',
  email: ''
}

function FriendForm({updateFriendsList}){
  const [values, setValues] = useState(initialState);

  const reset= ()=> {}

  const handleChange = e => {
    const {name, value} = e.target;
    setValues(values =>( {
      ...values,
      [name]: value
    }))
  }

  const handleSubmit = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/api/friends', values)
    .then(resp => {
      updateFriendsList(resp.data);

    })
  }

  return (
    <div>
      <h2>Add friend</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            onChange={handleChange}
            value={values.name}
            placeholder="Enter name"
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            onChange={handleChange}
            value={values.age}
            placeholder="Enter age"
          />
        </label>
        <label>
          Email:
          <input type='email' name='email' onChange={handleChange} value={values.email} placeholder='Enter email' />
        </label>
        <button type='submit'>Add friend</button>
      </form>
    </div>
  );
}