import React, { Component } from 'react'
import { Provider } from 'react-redux'
import store from './store'
import App from './components/RooterDrawer'

export default class Index extends Component {
  render () {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}
