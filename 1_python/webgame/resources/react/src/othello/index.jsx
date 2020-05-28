import React from 'react';
import ReactDOM from 'react-dom';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';

import { httpGET, httpPOST } from '../share/http_request.jsx';

class Index extends React.Component {
    constructor() {
        super();

        this.state = {
            gameId: -1,
        }

        this.postCreateRoom = this.postCreateRoom.bind(this);
        this.postJoinRoom = this.postJoinRoom.bind(this);
    }

    postCreateRoom() {
        httpPOST("post/createroom/", {}, function (err, res) {
            if (res.body["success"]) {
                alert(res.body["message"]);
                location.href = "game/" + res.body["gameId"] + "/"
            }
        });
    }
    
    postJoinRoom() {
        httpPOST("post/joinroom/5/", {}, function (err, res) {
            if (res.body["success"]) {
                
            }
            else {
                alert(res.body["message"]);
            }
        });
    }

    postWatchRoom() {

    }

    postCancelMatching() {

    }

    getMatchingStatus() {

    }

    render() {
        return (
            <Container fluid>
                <br />
                <Row>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <Card.Header>Create</Card.Header>
                            <Card.Body>
                                <Card.Title>Create New Room</Card.Title>
                                <Card.Text>
                                Create new othello room and you will wait for the opponent.
                                </Card.Text>
                                <Button variant="primary" onClick={this.postCreateRoom}>CREATE</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <Card.Header>Join</Card.Header>
                            <Card.Body>
                                <Card.Title>Matching</Card.Title>
                                <Card.Text>
                                You will join the room.
                                </Card.Text>
                                <Button variant="primary" onClick={this.postJoinRoom}>JOIN</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4} lg={4} md={4} sm={12} xs={12}>
                        <Card>
                            <Card.Header>Watch</Card.Header>
                            <Card.Body>
                                <Card.Title>Watch the Game</Card.Title>
                                <Card.Text>
                                You can watch existing game.
                                </Card.Text>
                                <Button variant="primary" onClick={this.postCreateRoom}>WATCH</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        );
    }
}

ReactDOM.render(
    <Index />,
    document.getElementById("index")
);