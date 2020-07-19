import React, { Component } from 'react'
import { injectStripe, CardNumberElement, CardExpiryElement, CardCVCElement  } from "react-stripe-elements"

class PaymentForm extends Component {
  state = {
    renderForm: false
  }
  render() {
    let form = this.state.renderForm ? (
      <form id="payment-form">
        <label>Card number</label>
        <CardNumberElement/>

        <label>Expiry Date</label>
        <CardExpiryElement/>

        <label>CVC</label>
        <CardCVCElement/>

        <button>Submit</button>
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
export default injectStripe(PaymentForm)