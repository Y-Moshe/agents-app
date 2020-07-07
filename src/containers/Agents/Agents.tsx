import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, matchPath, RouteChildrenProps } from 'react-router';
import { PuffLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Agents.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Agent from '../../components/Agent/Agent';
import AgentsData, { getAgent, AgentData } from '../../AgentsData';
import Abilities from '../Abilities/Abilities';

const getParams = (pathname: string, url: string) => {
    const matchProfile = matchPath(pathname, {
        path: `${url}/:agent`,
        strict: false
    });
    return matchProfile && matchProfile.params;
};

interface AgentsProps extends React.Props<any>, RouteChildrenProps {}

export default function Agents(props: AgentsProps) {
    const { url } = useRouteMatch();

    const [agent, setAgent] = useState<AgentData>();
    const [activeVideo, setActiveVideo] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isAgentLoad, setIsAgentLoad] = useState(false);

    useEffect(() => {
        const params: any = getParams(props.location.pathname, url);

        if (params && params.agent) {
            setAgent(getAgent(params.agent));
            setActiveVideo(0);
            setIsAgentLoad(false);
            setTimeout(() => {
                setIsAgentLoad(true);
            }, 300);
        }

    }, [props.location, url]);

    const links = AgentsData.map(agentObject => agentObject.name.toUpperCase());

    return (
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation links={links} />
                </Col>
                <Col xl="8">
                    {props.match?.isExact &&
                     <img
                        draggable={false}
                        src="http://playvalorant.co.il/wp-content/uploads/2020/07/19201080333989.png"
                        alt="Agents"
                        className="img-fluid" />}
                    <Route path={`${url}/:agent`} render={(p) => (
                        <Agent
                            {...p}
                            in={isAgentLoad}
                            image={agent?.image}
                            role={agent?.role}
                            biography={agent?.biography} />
                    )}  />
                </Col>
            </Row>
            {agent && <Row className={classes.ContentRow} noGutters>
                <Col xl="6" style={{padding: 60}}>
                    <Abilities
                        abilities={agent?.abilities}
                        onClick={(index) => setActiveVideo(index)} />
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
                            autoPlay
                            onLoadStart={() => setIsLoading(true)}
                            onLoadedData={() => setIsLoading(false)}
                            src={agent?.abilities[activeVideo].videoURL}>
                        </video>
                    </div>
                </Col>
            </Row>}
        </Container>
    )
}
