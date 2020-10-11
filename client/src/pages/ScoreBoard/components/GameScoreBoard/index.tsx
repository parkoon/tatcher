import React, { Ref, useState, useEffect } from 'react'
import styled, { css } from 'styled-components'

import { Container, Wrapper, Row, PlayerNameField, Point, Status } from './styles'
import Text from '@Components/Typography/Text'

type ScoreBoardTypes = {}
function GameScoreBoard({}: ScoreBoardTypes) {
    const [selectedUser, setSelectedUser] = useState('')

    return (
        <Container>
            <Status>TIEBREAK</Status>
            <Wrapper>
                <Row>
                    <PlayerNameField isServeTurn={true}>
                        <Text>박종혁</Text> /<Text>김진아</Text>
                    </PlayerNameField>

                    <Point>2</Point>
                    <Point>40</Point>
                </Row>
                <Row>
                    <PlayerNameField isServeTurn={false}>
                        <Text>박종혁</Text>
                        <Text>김진아</Text>
                    </PlayerNameField>

                    <Point>2</Point>
                    <Point>40</Point>
                </Row>
            </Wrapper>
        </Container>

        // <StyledScoreBoardWrapper ref={htmlRef} id="score-board">
        //     {isDeuce ? (
        //         <StyledGameStatus> DEUCE </StyledGameStatus>
        //     ) : isMatchPoint ? (
        //         <StyledGameStatus> MATCH POINT</StyledGameStatus>
        //     ) : isTieBreak ? (
        //         <StyledGameStatus>TIEBREAK</StyledGameStatus>
        //     ) : null}

        //     <StyledScoreBoardContainer>
        //         <StyledBoardRow>
        //             <StyledPlayerNameField isServeTurn={teamA.isServeTurn}>
        //                 <div style={{ width: '100%' }}>
        //                     <StyledPlayerName
        //                         color={'red'}
        //                         selected={selectedUser === teamA.members[0]}
        //                         onClick={() => setSelectedUser(teamA.members[0])}
        //                     >
        //                         {teamA.members[0]}
        //                     </StyledPlayerName>{' '}
        //                     /{' '}
        //                     <StyledPlayerName
        //                         color={'red'}
        //                         selected={selectedUser === teamA.members[1]}
        //                         onClick={() => setSelectedUser(teamA.members[1])}
        //                     >
        //                         {teamA.members[1]}
        //                     </StyledPlayerName>
        //                 </div>
        //                 {teamA.isAd && <StyledAd>AD</StyledAd>}
        //             </StyledPlayerNameField>
        //             <StyledGamePoint>{teamA.gamePoint}</StyledGamePoint>
        //             {!isTieBreak ? (
        //                 <StyledGameScore
        //                     onClick={() => onIncreaseScore('normal', 'ds')}
        //                     onContextMenu={(e) => {
        //                         e.preventDefault()
        //                         onDecreaseScore('normal', 'ds')
        //                     }}
        //                 >
        //                     {12}
        //                 </StyledGameScore>
        //             ) : (
        //                 <StyledGameScore
        //                     onClick={() => onIncreaseScore('tie', 'ds')}
        //                     onContextMenu={(e) => {
        //                         e.preventDefault()
        //                         onDecreaseScore('tie', 'ds')
        //                     }}
        //                 >
        //                     {teamA.tieScore}
        //                 </StyledGameScore>
        //             )}
        //         </StyledBoardRow>
        //         <StyledBoardRow>
        //             <StyledPlayerNameField>
        //                 <div style={{ width: '100%' }}>
        //                     <StyledPlayerName
        //                         color={'red'}
        //                         selected={selectedUser === teamB.members[0]}
        //                         onClick={() => setSelectedUser(teamB.members[0])}
        //                     >
        //                         {teamB.members[0]}
        //                     </StyledPlayerName>{' '}
        //                     /{' '}
        //                     <StyledPlayerName
        //                         color={'red'}
        //                         selected={selectedUser === teamB.members[1]}
        //                         onClick={() => setSelectedUser(teamB.members[1])}
        //                     >
        //                         {teamB.members[1]}
        //                     </StyledPlayerName>
        //                 </div>
        //                 {teamB.isAd && <StyledAd>AD</StyledAd>}
        //             </StyledPlayerNameField>
        //             <StyledGamePoint>{teamB.gamePoint}</StyledGamePoint>
        //             {!isTieBreak ? (
        //                 <StyledGameScore
        //                     onClick={() => onIncreaseScore('normal', 'hd')}
        //                     onContextMenu={(e) => {
        //                         e.preventDefault()
        //                         onDecreaseScore('normal', 'hd')
        //                     }}
        //                 >
        //                     {12}
        //                 </StyledGameScore>
        //             ) : (
        //                 <StyledGameScore
        //                     onClick={() => onIncreaseScore('tie', 'hd')}
        //                     onContextMenu={(e) => {
        //                         e.preventDefault()
        //                         onDecreaseScore('tie', 'hd')
        //                     }}
        //                 >
        //                     {teamB.tieScore}
        //                 </StyledGameScore>
        //             )}
        //         </StyledBoardRow>
        //     </StyledScoreBoardContainer>
        // </StyledScoreBoardWrapper>
    )
}

export default GameScoreBoard
