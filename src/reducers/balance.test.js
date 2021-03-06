import * as constants from "../actions/constants"
import balanceReducer from "./balance"
import balanceReducer2 from "./balance"

describe("balanceReducer", () => {
  describe("When initializing", () => {
    const balance = 10
    it("sets a balance", () => {
      expect(
        balanceReducer(undefined, { type: constants.SET_BALANCE, balance })
      ).toEqual(balance)
    })

    describe("then re-initializng", () => {
      it("fetches a balance from the cookie", () => {
        expect(balanceReducer2(undefined, {})).toEqual(balance)
      })
    })
  })

  it("deposits into the balance", () => {
    const deposit = 10
    const initialState = 5
    expect(
      balanceReducer(initialState, { type: constants.DEPOSIT, deposit })
    ).toEqual(deposit + initialState)
  })

  it("withdraws from the balance", () => {
    const withdrawal = 10
    const initialState = 5
    expect(
      balanceReducer(initialState, { type: constants.WITHDRAW, withdrawal })
    ).toEqual(initialState - withdrawal)
  })
})
