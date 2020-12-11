import React, { Component } from "react"
import { connect } from "react-redux"
import { deposit, withdraw } from "../actions/balance"

export class Wallet extends Component {
  constructor(props) {
    super(props)
  }

  updateBalance = (event) => {
    this.setState({ balance: parseInt(event.target.value, 10) })
  }

  deposit = () => this.props.deposit(this.state.balance)

  withdraw = () => this.props.withdraw(this.state.balance)

  render() {
    return (
      <div>
        <h3 className="balance">Wallet balance: {this.props.balance}</h3>
        <br />
        <label>
          $
          <input
            className="input-balance"
            onChange={this.updateBalance}
          ></input>
          <button className="btn-deposit" onClick={this.deposit} key="deposit">
            Deposit
          </button>
          <button
            className="btn-withdraw"
            onClick={this.withdraw}
            key="withdraw"
          >
            Withdraw
          </button>
        </label>
      </div>
    )
  }
}

export default connect(
  (state) => ({
    balance: state,
  }),
  { deposit, withdraw }
)(Wallet)
