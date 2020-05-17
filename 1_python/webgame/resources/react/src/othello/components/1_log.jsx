import React from 'react';
import { Card, Col, Row, Table } from 'react-bootstrap';

export class LogPanel extends React.Component {
    constructor() {
        super();
    }

    createTable(logs) {
        let trs = logs.map((tr, idx, logs) => this.createTr([logs.length - idx].concat(tr), logs.length - idx));
        return (
            <Table striped bordered hover size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>User</th>
                        <th>Log</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {trs}
                </tbody>
            </Table>
        );
    }

    createTr(tr, idx) {
        let tds = tr.map(td => this.createTd(td))
        return (
            <tr onClick={() => this.props.playbackLog(idx)}>
                {tds}
            </tr>
        );
    }

    createTd(td) {
        return (
            <td>{td}</td>
        );
    }

    render() {
        return (
            <Card>
                <Card.Header as="h5">Log Panel</Card.Header>
                <Card.Body>
                    <Row>
                        <Col xl={12} lg={12} md={12} sm={12} xs={12}>
                            {this.createTable(this.props.logs)}
                        </Col>
                    </Row>
                </Card.Body>
            </Card>
        );
    }
}