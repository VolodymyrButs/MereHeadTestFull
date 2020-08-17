import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './storage/reduser'
import { createGlobalStyle } from 'styled-components'
import App from './App'

const GlobalStyle = createGlobalStyle`
  html,body {
    margin:0
  }
  button{
      :hover{
          background-color: lightblue;
          cursor: pointer;
          }
        :focus{
            border-color: lightcoral;
            outline:none;
        }
  }
`

ReactDOM.render(
    <React.Fragment>
        <GlobalStyle />
        <Provider store={store}>
            <App />
        </Provider>
    </React.Fragment>,
    document.getElementById('root')
)
