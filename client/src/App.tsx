import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@Components/Header'
import theme from '@Helpers/theme'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <Header title="테니스 친구 찾기" />
        </ThemeProvider>
    )
}

export default App
