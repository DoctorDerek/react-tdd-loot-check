import React from "react"
import { mount } from "enzyme"
import AppFunctionComponent from "./AppFunctionComponent"

let app = mount(<AppFunctionComponent />)

describe("App (Function Component)", () => {
  beforeEach(() => {
    // Clean up between tests:
    app = mount(<AppFunctionComponent />)
  })

  // It Renders.
  it("Renders correctly", () => {
    expect(app).toMatchSnapshot()
  })
})
