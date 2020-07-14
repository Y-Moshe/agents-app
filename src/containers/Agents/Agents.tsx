import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, matchPath, RouteChildrenProps } from 'react-router';
import { PuffLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-bootstrap';

import classes from './Agents.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Agent from '../../components/Agent/Agent';
import AgentsData, { getAgent, AgentData, maps } from '../../AgentsData';
import Abilities from '../Abilities/Abilities';
import Maps from '../Maps/Maps';

// a Function returns the params for the given url.
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
    const [isAgentLoad, setIsAgentLoad] = useState(false); // hold the transition / animation trigger
    const [activeAbility, setActiveAbility] = useState(0); // hold the index of the ability in ablities array
    const [isLoading, setIsLoading] = useState(false); // for the spinner
    const [activeMap, setActiveMap] = useState(''); // the map name, lowercase only!

    // fires when url changes
    useEffect(() => {
        const params: any = getParams(props.location.pathname, url);

        // do the folowing only if 'agent' param exists(/agents/:agent)
        if (params && params.agent) {
            setAgent(getAgent(params.agent));
            setActiveAbility(0);
            setIsAgentLoad(false); // animation is applied
            setTimeout(() => {
                setIsAgentLoad(true); // animation is applied
            }, 300);
        }

    }, [props.location, url]);

    // array of links: ['JETT','RAZE', ...]
    const links = AgentsData.map(agentObject => agentObject.name.toUpperCase());
    
    return (
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation links={links} />
                </Col>
                <Col xl="8">
                    { // display agents image if we at exact /agents
                    props.match?.isExact &&
                     <img
                        draggable={false}
                        src="http://playvalorant.co.il/wp-content/uploads/2020/07/19201080333989.png"
                        alt="Agents"
                        className="img-fluid" />}
                    <Route path={`${url}/:agent`} render={(p) => (
                        <Agent
                            {...p}
                            in={isAgentLoad}
                            imgURL={agent?.imgURL}
                            role={agent?.role}
                            biography={agent?.biography} />
                    )}  />
                </Col>
            </Row>
            {agent && (<>
            <Row className={classes.ContentRow} noGutters>
                <Col xl="6" style={{padding: 60}}>
                    <Abilities
                        abilities={agent?.abilities}
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
                            src={agent?.abilities[activeAbility].videoURL}>
                        </video>
                    </div>
                </Col>
            </Row>
            <h2 className={classes.TipsTitle}>טיפים וטריקים</h2>
            <Row className={classes.MapsRow} noGutters>
                <Col xs="12" style={{display: 'flex'}}>
                    <Maps
                        maps={maps}
                        onMapClick={(map) => setActiveMap(map.trim().toLowerCase())} />
                </Col>
                <Col xs="12">
                    <div className={classes.VideoTips} hidden={!activeMap}>
                        {
                            // looping through all videos for the selected map
                            // @ts-ignore
                        agent && agent.abilities[activeAbility].mapTips[activeMap]
                            ?.map((vid, i) => (
                                <video
                                    key={i + 'ac34s3'}
                                    controls
                                    src={vid} />
                        ))}
                    </div>
                </Col>

            </Row></>)}
        </Container>
    )
}
