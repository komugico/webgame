import React from 'react';
import { Col } from 'react-bootstrap';
import { STONE_EMPTY as E, STONE_BLACK as B, STONE_WHITE as W, FLIP_INTERVAL } from './othello_const.jsx';

export class Square extends React.Component {
    constructor() {
        super();

        this.state = {
            stoneImg: ""
        };
    }

    componentDidMount() {
        this.updateStone(this.props.stone, this.props.flip)
    }

    updateStone(stone, flip) {
        if (stone == W || stone == B) {
            if (flip != 0) {
                this.flipAnimation(stone, (flip - 1) * FLIP_INTERVAL);
            }
            else {
                this.setState({ stoneImg: this.getStoneImg(stone, "stone") });
            }
        }
        else {
            this.setState({ stoneImg: this.getStoneImg(E, "") });
        }
    }

    flipAnimation(stone, interval) {
        let stone1 = (stone == W) ? B : W;
        let stone2 = (stone == W) ? W : B;

        this.setState({ stoneImg: this.getStoneImg(stone1, "stone") })
        setTimeout(() => {
            this.setState({ stoneImg: this.getStoneImg(stone1, "stone anime-flip1") });
            setTimeout(() => {
                this.setState({ stoneImg: this.getStoneImg(stone2, "stone anime-flip2") });
                setTimeout(() => {
                    this.setState({ stoneImg: this.getStoneImg(stone2, "stone") });
                }, 500);
            }, 500);
        }, interval);
    }

    getStoneImg(stone, className) {
        if (stone == W) {
            return <img className={className} src="/static/images/white.png"></img>
        }
        else if (stone == B) {
            return <img className={className} src="/static/images/black.png"></img>
        }
        else {
            return <div></div>;
        }
    }

    render() {
        return (
            <Col className="square-col">
                <button className="square">
                    {this.state.stoneImg}
                </button>
            </Col>
        )
    }
}