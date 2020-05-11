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
                <Row>
                    <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <InfoPanel />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <OthelloPanel />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <LogPanel />
                            </Col>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <ChatPanel />
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        );
    }
}

ReactDOM.render(
    <Game />,
    document.getElementById("game")
);