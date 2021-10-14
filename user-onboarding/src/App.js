import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import * as yup from 'yup';
import './App.css';


const initialFormValues = {
  name: '',
  email: '',
  password: '',
  terms: false
}
const initialFormErrors = {
  name: '',
  email: '',
  password: '',
}
const initialUser = []
const initialDisabled = true


function App() {

  const [user, setUser] = useState(initialUser)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setNewUser([res.data, ...user])
    })
  }


  return (
    <div className="container">
      <header className="App-header">
        <h2>User Form</h2>
      </header>
      <Form />
    </div>
  );
}

export default App;
