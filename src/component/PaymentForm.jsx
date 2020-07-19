import React, { Component } from 'react'

class PaymentForm extends Component {
  state = {
    renderForm: false
  }
  render() {
    let form = this.state.renderForm ? (
      <form>
        <label>FORM</label>
      </form>
    ) : (
      <button id="become-subscriber" onClick={() => this.setState ({renderForm: true})}>Become a subscriber</button>
    )

    return (
      <div>
        {form}
      </div>
    )
  }
}
export default PaymentForm