import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

import { PlayerInfoPanel } from './2_player_info.jsx';

export class InfoPanel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Information Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                            <PlayerInfoPanel
                                header="Player 1"
                                name={this.props.player1.name}
                                score={this.props.score.player1}
                            />
                        </Col>
                        <Col xl={2} lg={2} md={2} sm={12} xs={12}>
                            <p style={{ justifyContent: 'center', flexDirection: 'row' }}>{this.props.gameID}</p>
                            <br />
                            <p style={{ justifyContent: 'center', flexDirection: 'row' }}>{this.props.turn}</p>
                        </Col>
                        <Col xl={5} lg={5} md={5} sm={12} xs={12}>
                            <PlayerInfoPanel
                                header="Player 2"
                                name={this.props.player2.name}
                                score={this.props.score.player2}
                            />
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}