import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Form from './Form';
import formSchema from './formSchema';
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

  const getUser = () => {
    axios.get('https://reqres.in/api/users')
    .then(res => {
      setUser(res.data.data)
    }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
    .then(res => {
      setUser([res.data, ...user])
    }).catch(err => console.error(err)
    .finally(() => {
      setFormValues(initialFormValues);
    }))
  }

  const validate = (name, value) => {
    yup.reach(formSchema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  const inputChange = (name, value) => {
    validate(name, value);
    setFormValues({
      ...formValues, [name]: value
    })
  }

    const formSubmit = () => {
      const newUser = {
        name: formValues.name.trim(),
        email: formValues.email.trim(),
        password: formValues.password.trim(),
        terms: ['terms'].filter(terms => !!formValues[terms])
      }
      postNewUser(newUser);
    }
    useEffect(() => {
      getUser()
    }, [])

    useEffect(() => {
      formSchema.isValid(formValues).then(valid => setDisabled(!valid))
    }, [formValues])

  return (
    <div className="container">
      <header className="App-header">
        <h2>User Form</h2>
      </header>
      <Form 
      values={formValues}
      change={inputChange}
      submit={formSubmit}
      disabled={disabled}
      errors={formErrors}
      />
      {/* {
        user.map(users => {
          return (
            
          )
        })
      } */}
    </div>
  );
}

export default App;
