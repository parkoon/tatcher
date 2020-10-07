import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@Components/Header'
import theme from '@Helpers/theme'
import { NotificationProvider } from '@Components/Notification'
import { AuthProvider } from '@Context/auth'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <NotificationProvider placement="top-right">
                    <Header title="테니스 친구 찾기" />
                </NotificationProvider>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
