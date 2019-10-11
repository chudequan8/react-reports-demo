import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { ThemeProvider } from '@material-ui/styles';
import reducer from './reducers'
import App from './containers/App'
import theme from './theme';
import './styles/index.css';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
  // middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
)

render(
  <ThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,
  document.getElementById('root')
)
