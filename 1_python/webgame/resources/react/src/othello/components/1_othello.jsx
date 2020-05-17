import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Board } from './2_board.jsx';
import { ControllPanel } from './2_controll.jsx';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W, PUT_POS as P, STONES_INIT, FLIPS_INIT } from './othello_const.jsx';

export class OthelloPanel extends React.Component {
    constructor() {
        super();

        this.state = {
            stones: STONES_INIT,
            flips: FLIPS_INIT,
            turnCnt: 0,             // 一旦stateとして吸収しないと，下位コンポーネントにすぐ伝達されてしまう
        }
    }

    componentDidMount() {
        
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.turnCnt != prevProps.turnCnt) {
            console.log(this.props.turnCnt);
            if (this.props.turnCnt == 0) {
                this.setState((state, props) => ({
                    stones: [
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, W, B, E, E, E],
                        [E, E, E, B, W, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E]
                    ],
                    flips: [
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    turnCnt: props.turnCnt,
                }));
            }
            if (this.props.turnCnt == 1) {
                this.setState((state, props) => ({
                    stones: [
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, W, B, E, E, E],
                        [E, E, E, B, B, B, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E]
                    ],
                    flips: [
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, P, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    turnCnt: props.turnCnt,
                }));
            }
            if (this.props.turnCnt == 2) {
                this.setState((state, props) => ({
                    stones: [
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, W, B, E, E, E],
                        [E, E, E, B, W, B, E, E],
                        [E, E, E, E, E, W, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E]
                    ],
                    flips: [
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, 0, P, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    turnCnt: props.turnCnt,
                }));
            }
            if (this.props.turnCnt == 3) {
                this.setState((state, props) => ({
                    stones: [
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, W, B, E, E, E],
                        [E, E, E, B, B, B, E, E],
                        [E, E, E, E, B, W, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E]
                    ],
                    flips: [
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 1, 0, 0, 0],
                        [0, 0, 0, 0, P, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    turnCnt: props.turnCnt,
                }));
            }
            if (this.props.turnCnt == 4) {
                this.setState((state, props) => ({
                    stones: [
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, W, B, E, E, E],
                        [E, E, E, W, B, B, E, E],
                        [E, E, E, W, W, W, E, E],
                        [E, E, E, E, E, E, E, E],
                        [E, E, E, E, E, E, E, E]
                    ],
                    flips: [
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 1, 0, 0, 0, 0],
                        [0, 0, 0, P, 2, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0],
                        [0, 0, 0, 0, 0, 0, 0, 0]
                    ],
                    turnCnt: props.turnCnt,
                }));
            }
        }
    }

    componentWillUnmount() {

    }

    sendLog() {

    }

    putStone(x, y) {

    }

    pass() {

    }

    surrender() {

    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Othello Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <Board
                                stones={this.state.stones}
                                flips={this.state.flips}
                                turnCnt={this.state.turnCnt}
                                putStone={this.putStone}
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ControllPanel
                                pass={this.pass}
                                surrender={this.surrender}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}