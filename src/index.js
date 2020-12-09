import React from "react"
import { render } from "react-dom"
import { createStore } from "redux"
import rootReducer from "./reducers/balance"
import { Provider } from "react-redux"
import App from "./components/App"
import AppFunctionComponent from "./components/AppFunctionComponent"

const store = createStore(rootReducer)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root1")
)
render(
  <Provider store={store}>
    <AppFunctionComponent />
  </Provider>,
  document.getElementById("root2")
)
