import React from 'react'
import { Button, Form, Segment, Menu, Grid } from 'semantic-ui-react'

const AuthForm = (props) => {
  return (
    <Segment inverted>
    <Menu inverted pointing secondary>
      <Menu.Menu position="right">
        <Menu.Item as="h4">
          <Button
            inverted

          >
            Log-out
          </Button>
        </Menu.Item>
      </Menu.Menu>
    </Menu>
    
<Grid columns={3} divided>
<Grid.Column></Grid.Column>
<Grid.Column></Grid.Column>
<Grid.Column>
    <Form inverted onSubmit={props.authenticate} id='login-form'>
      <Form.Field>
      <label id="label">Email</label>
      <input name="email" type='email' id='email' />
      
      <label id="label">Password</label>
      <input name='password' type='password' id='password' />
      </Form.Field>
      <Button inverted id='submit'>Submit</Button>
    </Form>
    </Grid.Column>
    </Grid>
    </Segment>
    
  )
}

export default AuthForm;
