import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Board } from './2_board.jsx';
import { ControllPanel } from './2_controll.jsx';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W } from './othello_const.jsx';

export class OthelloPanel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Othello Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={8} lg={8} md={8} sm={12} xs={12}>
                            <Board
                                stones = {[
                                    [E,E,E,E,E,E,E,E],
                                    [E,E,E,E,E,E,E,E],
                                    [E,E,E,E,E,E,E,E],
                                    [E,E,E,W,B,E,E,E],
                                    [E,E,E,B,B,E,E,E],
                                    [E,E,E,E,B,E,E,E],
                                    [E,E,E,E,B,E,E,E],
                                    [E,E,E,E,B,E,E,E],
                                ]}
                                flips = {[
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                    [0,0,0,0,1,0,0,0],
                                    [0,0,0,0,2,0,0,0],
                                    [0,0,0,0,3,0,0,0],
                                    [0,0,0,0,0,0,0,0],
                                ]}
                            />
                        </Col>
                        <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                            <ControllPanel />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}