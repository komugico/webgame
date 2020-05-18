import React from 'react';
import ReactDOM from 'react-dom';
import { Col, Container, Row } from 'react-bootstrap';

import { InfoPanel } from './components/1_info.jsx';
import { OthelloPanel } from './components/1_othello.jsx';
import { LogPanel } from './components/1_log.jsx';
import { ChatPanel } from './components/1_chat.jsx';

import { httpGET } from '../share/http_request.jsx';

class Game extends React.Component {
    constructor() {
        super();

        this.state = {
            timerCnt: 0,
            player1: { name: "Player" },
            player2: { name: "Enemy"},
            score: { player1: 10, player2: 12 },
            turn: "Player 1",
            turnCnt: 0,
            playbackLogIdx: -1,
            gameID: 12345,
            logs: [["Plyaer 1", "First Log", "2020/5/12 10:12"], ["Plyaer 2", "Second Log", "2020/5/12 10:14"], ["Plyaer 1", "Third Log", "2020/5/12 10:16"]].reverse(),
            chats: [["Player 1", "First Comment", "2020/5/12 10:12"], ["Plyaer 2", "Second Comment", "2020/5/12 10:14"], ["Plyaer 1", "Third Comment", "2020/5/12 10:16"]].reverse()
        }

        this.playbackLog = this.playbackLog.bind(this);
    }

    componentDidMount() {
        this.timer = setInterval(
            () => this.tick(),
            1500
        );
    }

    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.getLog();
        if (this.state.playbackLogIdx >= 0) {
            this.setState((state, props) => ({
                turnCnt: state.playbackLogIdx,
                playbackLogIdx: -1,
            }));
        }
        else {
            this.setState((state, props) => ({
                turnCnt: state.turnCnt + 1,
            }));
        }
    }

    getLog() {
        httpGET("get/logs/", {}, function (err, res) {
            console.dir(res);
        });
    }

    getChat() {

    }

    playbackLog(idx) {
        this.setState((state, props) => ({
            playbackLogIdx: idx
        }));
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
                                    player1={this.state.player1}
                                    player2={this.state.player2}
                                    score={this.state.score}
                                    turn={this.state.turn}
                                    turnCnt={this.state.turnCnt}
                                    gameID={this.state.gameID}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <OthelloPanel
                                    logs={this.state.logs}
                                    turn={this.state.turn}
                                    turnCnt={this.state.turnCnt}
                                />
                            </Col>
                        </Row>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <LogPanel
                                    logs={this.state.logs}
                                    playbackLog={this.playbackLog}
                                />
                            </Col>
                        </Row>
                        <br />
                        <Row>
                            <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                                <ChatPanel
                                    chats={this.state.chats}
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