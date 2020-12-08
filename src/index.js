import React from "react"
import { render } from "react-dom"
import App from "./components/App"
import AppFunctionComponent from "./components/AppFunctionComponent"

render(<App />, document.getElementById("root1"))
render(<AppFunctionComponent />, document.getElementById("root2"))
