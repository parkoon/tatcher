import React, { useRef } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import Header from '@Components/Header'
import theme from '@Helpers/theme'
import { NotificationProvider } from '@Components/Notification'
import { AuthProvider } from '@Context/auth'
import HomePage from '@Pages/Home'
import ScoreBoardPage from '@Pages/ScoreBoard'
import Modal, { ModalRef } from '@Components/Modal'

function App() {

    const ModalRef = useRef<ModalRef>(null)

    const handleSampleClick = () => {
        ModalRef.current?.openModal()
    }


    return (
        <ThemeProvider theme={theme}>
            <AuthProvider>
                <Router>
                    <NotificationProvider placement="top-right">
                        <Header title="테니스 친구 찾기" />
                        <Route exact path="/" component={HomePage} />
                        <Route exact path="/scoreboard" component={ScoreBoardPage} />

                        <button onClick={handleSampleClick}>sample</button>

                        <Modal ref={ModalRef}>
                            <h1>Helllo</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Soluta doloribus excepturi necessitatibus nemo, delectus labore quasi distinctio tempora praesentium fuga fugiat odit, enim ducimus impedit iure quas nisi provident unde?</p>
                        </Modal>
                    </NotificationProvider>
                </Router>
            </AuthProvider>
        </ThemeProvider>
    )
}

export default App
