import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

import App from './App'

const GlobalStyle = createGlobalStyle`
    ${reset};
    * {
        box-sizing: border-box;
    }
`

ReactDOM.render(
    <React.StrictMode>
        <GlobalStyle />
        <App />
    </React.StrictMode>,
    document.getElementById('root'),
)
