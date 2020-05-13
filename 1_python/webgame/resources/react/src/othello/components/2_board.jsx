import React from 'react';
import { Col, Row } from 'react-bootstrap';

import { Square } from './3_square.jsx';

export class Board extends React.Component {
    constructor() {
        super();
    }
    
    createBoard() {
        let board = [
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0]
        ].slice().map((row, y) =>
            <Row className="board-row" noGutters>
                <Col></Col>
                <Col></Col>
                {row.slice().map((col, x) => this.renderSquare(col, x, y))}
                <Col></Col>
                <Col></Col>
            </Row>
        )
        return board;
    }

    renderSquare(stone, x, y) {
        return (
            <Square />
        );
    }

    render() {
        return (
            <div>
                {this.createBoard()}
            </div>
        );
    }
}