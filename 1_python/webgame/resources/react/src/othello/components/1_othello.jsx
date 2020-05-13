import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { Board } from './2_board.jsx';
import { ControllPanel } from './2_controll.jsx';

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
                            <Board />
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