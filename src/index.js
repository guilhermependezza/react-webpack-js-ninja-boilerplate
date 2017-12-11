import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import App from './app'

function renderHelper (Component) {
  render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.querySelector('[data-js="app"]')
  )
}

renderHelper(App)

if (module.hot) {
  module.hot.accept('./app', () => {
    const nextApp = require('./app').default
    renderHelper(nextApp)
  })
}
