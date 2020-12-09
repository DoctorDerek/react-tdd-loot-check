import React, { Component } from "react"
import Wallet from "./Wallet"

export default class App extends Component {
  // default constructor

  render() {
    return (
      <section>
        <h2>Loot Check (Class Component)</h2>
        <Wallet></Wallet>
      </section>
    )
  }
}
