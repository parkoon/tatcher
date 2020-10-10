import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@Components/Header'
import theme from '@Helpers/theme'
import { NotificationProvider } from '@Components/Notification'
import { AuthProvider } from '@Context/auth'
import HomePage from '@Pages/Home'
import ScoreBoardPage from '@Pages/ScoreBoard'

function App() {
    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <NotificationProvider placement="top-right">
                        <Header title="테니스 친구 찾기" />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/scoreboard" component={ScoreBoardPage} />
                    </NotificationProvider>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
