import React from "react"
import { shallow } from "enzyme"
import { Wallet } from "./Wallet"

describe("Wallet", () => {
  const mockDeposit = jest.fn()
  const mockWithdraw = jest.fn()
  const props = { balance: 20, deposit: mockDeposit, withdraw: mockWithdraw }
  const wallet = shallow(<Wallet {...props} />)

  it("renders properly", () => {
    expect(wallet).toMatchSnapshot()
  })

  it("displays the balance from the props", () => {
    expect(wallet.find(".balance").text()).toEqual("Wallet balance: 20")
  })

  it("creates an input to deposit or withdraw from the balance", () => {
    expect(wallet.find(".input-balance").exists()).toBe(true)
  })

  describe("when the user types into the wallet input", () => {
    const userBalance = 25

    beforeEach(() => {
      wallet
        .find(".input-balance")
        .simulate("change", { target: { value: userBalance } })
    })

    it("updates the balance in `state` and converts it to an integer", () => {
      // @ts-expect-error because we don't know what's in `state`
      expect(wallet.state().balance).toEqual(userBalance)
    })

    describe("and the user wants to make a deposit", () => {
      beforeEach(() => wallet.find(".btn-deposit").simulate("click"))

      it("dispatches the `deposit()` it receives from props with the local balance", () => {
        expect(mockDeposit).toHaveBeenCalledWith(userBalance)
      })
    })

    describe("and the user wants to make a withdrawal", () => {
      beforeEach(() => wallet.find(".btn-withdraw").simulate("click"))

      it("dispatches the `withdraw()` it receives from props with the local balance", () => {
        expect(mockWithdraw).toHaveBeenCalledWith(userBalance)
      })
    })
  })
})
