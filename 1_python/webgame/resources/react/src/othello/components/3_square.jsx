import React from 'react';
import { Col } from 'react-bootstrap';

export class Square extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Col className="square-col">
                <button className="square">
                    <img className="stone" src="/static/images/dog.png"></img>
                </button>
            </Col>
        )
    }
}