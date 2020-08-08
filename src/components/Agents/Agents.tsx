import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Agents.module.scss';
import Navigation from '../../containers/Navigation/Navigation';

export default function Agents() {
    return (
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation />
                </Col>
                <Col xl="8">
                    <img
                        draggable={false}
                        src="http://playvalorant.co.il/wp-content/uploads/2020/07/19201080333989.png"
                        alt="Agents"
                        className="img-fluid" />
                </Col>
            </Row>
        </Container>
    )
}
