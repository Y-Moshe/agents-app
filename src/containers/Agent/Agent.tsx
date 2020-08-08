import React, { useEffect, useState } from 'react';
import { RouteChildrenProps, useParams } from 'react-router';
import { PuffLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Agent.module.scss';
import Navigation from '../Navigation/Navigation';
import AgentProfile from '../../components/AgentProfile/AgentProfile';
import Abilities from '../Abilities/Abilities';
import { IAgent, getAgent } from '../../API';

interface AgentProps extends React.Props<any>, RouteChildrenProps {}

export default function Agent(props: AgentProps) {
    const params: any = useParams();

    const [agent, setAgent] = useState<IAgent>();
    const [isAgentLoaded, setIsAgentLoaded] = useState(false); // hold the transition / animation trigger
    const [activeAbility, setActiveAbility] = useState(0); // hold the index of the ability in ablities array
    const [isLoading, setIsLoading] = useState(false); // video spinner

    // fires when url changes
    useEffect(() => {
        // do the folowing only if 'agentName' param exists(/:agentName)
        if (params.agentName) {
            // gets the id from the queryParams
            const id: any = new URLSearchParams(props.location.search).get('id');

            setActiveAbility(0);
            setIsAgentLoaded(false); // animation is applied
            getAgent(id).then(agentData => {
                setIsAgentLoaded(true); // animation is applied
                // timeout is only for the animation.
                // show animation when finished to hide.
                setTimeout(() => {
                    setAgent(agentData);
                }, 200);
            }).catch(error => console.log(error));
        }

    }, [props.location, params]);
    
    return (
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation />
                </Col>
                <Col xl="8">
                    {agent && <AgentProfile
                        in={isAgentLoaded}
                        imgURL={agent.imgURL}
                        role={agent.role}
                        biography={agent.biography} />}
                </Col>
            </Row>
            {agent && (<Row className={classes.ContentRow} noGutters>
                <Col xl="6" style={{padding: 60}}>
                    <Abilities
                        abilities={agent.abilities}
                        onClick={(index) => setActiveAbility(index)} />
                </Col>
                <Col xl="6">
                    <PuffLoader
                        size={200}
                        loading={isLoading}
                        css="margin: auto;"
                        color="white" />
                    <div
                        className={classes.Video}
                        style={{display: isLoading ? 'none' : 'flex'}}>
                        <video
                            loop
                            controls
                            autoPlay
                            onLoadStart={() => setIsLoading(true)}
                            onLoadedData={() => setIsLoading(false)}
                            src={agent.abilities[activeAbility].videoURL}>
                        </video>
                    </div>
                </Col>
            </Row>)}
        </Container>
    )
}
