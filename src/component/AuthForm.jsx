import React from 'react'
import { Button, Form } from 'semantic-ui-react'

const AuthForm = (props) => {
  return (
    <Form onSubmit={props.authenticate} id='login-form'>
      <Form.Field>
      <label id="label">Email</label>
      <input name="email" type='email' id='email' />
      
      <label id="label">Password</label>
      <input name='password' type='password' id='password' />
      </Form.Field>
      <Button id='submit'>Submit</Button>
    </Form>
  )
}

export default AuthForm;
