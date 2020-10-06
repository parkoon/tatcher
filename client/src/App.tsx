import React from 'react'
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
