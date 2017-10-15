import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import App from './components/app'
import reducers from './reducers'
import ReduxPromise from 'redux-promise'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore)

render(
  <Provider store={createStoreWithMiddleware(reducers, devToolsExtension())}>
    <App />
  </Provider>, 
  document.querySelector('#root')
)
