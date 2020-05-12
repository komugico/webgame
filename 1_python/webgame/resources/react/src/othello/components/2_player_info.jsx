import React from 'react';
import { Card } from 'react-bootstrap';

export class PlayerInfoPanel extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Card border="secondary" style={{ width: '100%' }}>
                <Card.Header>{this.props.header}</Card.Header>
                <Card.Body>
                    <Card.Title>{this.props.name}</Card.Title>
                    <Card.Text>{this.props.score}</Card.Text>
                </Card.Body>
            </Card>
        );
    }
}