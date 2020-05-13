import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'react-bootstrap';

import { InfoPanel } from './components/1_info.jsx';
import { OthelloPanel } from './components/1_othello.jsx';
import { LogPanel } from './components/1_log.jsx';
import { ChatPanel } from './components/1_chat.jsx';

class Game extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row>
                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <InfoPanel
                                    player1={{ name : 'Player' }}
                                    player2={{ name : 'Enemy' }}
                                    gameInfo={{ score : { player1: 10, player2: 12 }, turn : 'Player 1', gameID : 12345 }}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <OthelloPanel />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <LogPanel
                                    logs={[["Plyaer 1", "First Log", "2020/5/12 10:12"], ["Plyaer 2", "Second Log", "2020/5/12 10:14"], ["Plyaer 1", "Third Log", "2020/5/12 10:16"]].reverse()}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <ChatPanel
                                    chats={[["Player 1", "First Comment", "2020/5/12 10:12"], ["Plyaer 2", "Second Comment", "2020/5/12 10:14"], ["Plyaer 1", "Third Comment", "2020/5/12 10:16"]].reverse()}
                                />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <br />
            </Container>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById("game")
);