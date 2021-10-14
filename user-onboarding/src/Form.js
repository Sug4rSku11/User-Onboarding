import React from 'react'

export default function Form(props) {
    const { values, submit, change, disabled, errors, } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()}
    const onChange = evt => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
    


    return (

        <form className="form-container" onSubmit={onSubmit}>
            <div className="form-group ">
                <h2>Add a New User</h2>
                <button disabled={disabled}>Submit</button>  
                <div className="errors">
                    <div>{error.name}</div> 
                    <div>{errors.email}</div>
                    <div>{errors.password}</div>
                </div>
            </div>
            <div>
                <h4>Input Info</h4>
                <label>Name
                    <input
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='name'
                    />
                </label>
                <label>Email
                    <input
                    value={values.email}
                    onChange={onChange}
                    name='email'
                    type='email' 
                    />
                </label>
                <label>Password
                    <input 
                    value={values.password}
                    onChange={onChange}
                    name='password'
                    type='password'
                    />
                </label>
                <label>Terms of Service
                    <input 
                    type='checkbox'
                    name='terms of service'
                    onChange={onChange}
                    checked={values.terms}
                    />

                </label>
            </div>
        </form>

    )
}