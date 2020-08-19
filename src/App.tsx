import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { RouteComponentProps, Route } from 'react-router';
import { PuffLoader } from 'react-spinners';

import classes from './App.module.scss';
import Navigation from './components/Navigation/Navigation';
import AgentProfile from './components/AgentProfile/AgentProfile';
import Abilities from './containers/Abilities/Abilities';
import { IAgent, getAgent, ILink, getLinks } from './API';

interface AgentsProps extends React.Props<any>, RouteComponentProps { }

export default function Agents(props: AgentsProps) {
    const [agentData, setAgentData] = useState<IAgent>();
    const [isAgentLoaded, setIsAgentLoaded] = useState(false); // hold the transition / animation trigger
    const [activeAbility, setActiveAbility] = useState(0); // hold the index of the ability in ablities array
    const [isLoading, setIsLoading] = useState(false); // video spinner

    const [links, setLinks] = useState<ILink[]>(); // array of link objects { id, name }

    // Fetch links once
    useEffect(() => {
        getLinks().then(response => {
            setLinks(response.data);
        }).catch(error => console.log(error));
    }, []);

    // fires when url changes
    useEffect(() => {
        // gets the id from the queryParams
        const id = Number(new URLSearchParams(props.location.search).get('id'));

        if (id && id > 0) {
            setActiveAbility(0);
            setIsAgentLoaded(false); // animation is applied
            getAgent(id).then(agentData => {
                setTimeout(() => {
                    setIsAgentLoaded(true); // animation is applied
                    setAgentData(agentData);
                }, 250);
            }).catch(error => console.log(error));
        }

    }, [props, props.location]);
    
    return (
      <main>
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation
                        links={links}
                        url={props.match.url} />
                </Col>
                <Col xl="8">
                    {props.match.isExact && <img
                        draggable={false}
                        src="http://playvalorant.co.il/wp-content/uploads/2020/07/19201080333989.png"
                        alt="Agents"
                        className="img-fluid" />}
                    <Route path={`${props.match.url}:agentName`} render={() => (
                        <AgentProfile
                            in={isAgentLoaded}
                            imgURL={agentData?.imgURL}
                            role={agentData?.role}
                            biography={agentData?.biography} />
                    )} />
                </Col>
            </Row>
            {agentData && (<Row className={classes.ContentRow} noGutters>
                <Col xl="6" style={{padding: 60}}>
                    <Abilities
                        abilities={agentData.abilities}
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
                            src={agentData.abilities[activeAbility].videoURL}>
                        </video>
                    </div>
                </Col>
            </Row>)}
        </Container>
      </main>
    )
}
