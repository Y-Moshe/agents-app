import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, matchPath, RouteChildrenProps } from 'react-router';
import { PuffLoader } from 'react-spinners';
import { Container, Row, Col } from 'react-bootstrap';
import { AxiosResponse } from 'axios';

import classes from './Agents.module.scss';
import Navigation from '../../components/Navigation/Navigation';
import Agent from '../../components/Agent/Agent';
import Abilities from '../Abilities/Abilities';
import API, { ILink, IAgent } from '../../API';

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

    const [agent, setAgent] = useState<IAgent>();
    const [isAgentLoad, setIsAgentLoad] = useState(false); // hold the transition / animation trigger
    const [activeAbility, setActiveAbility] = useState(0); // hold the index of the ability in ablities array
    const [isLoading, setIsLoading] = useState(false); // video spinner
    const [links, setLinks] = useState<ILink[]>([]); // array of link objects { id, name. imgURL(not required this project) }

    // Fetch links
    useEffect(() => {
        API.get('/agents').then((response: AxiosResponse) => {
            setLinks(response.data);
        });
    }, []);

    // fires when url changes
    useEffect(() => {
        const params: any = getParams(props.location.pathname, url);

        // do the folowing only if 'agent' param exists(/:agent)
        if (params && params.agent) {
            // gets the id from the queryParams
            const id: any = new URLSearchParams(props.location.search).get('id');

            setActiveAbility(0);
            setIsAgentLoad(false); // animation is applied
            API.get('/'.concat(id)).then((response: AxiosResponse) => {
                const agentData = {
                    ...response.data,
                    abilities: JSON.parse(response.data.abilities)
                };

                setAgent(agentData);
                setIsAgentLoad(true); // animation is applied
            });
        }

    }, [props.location, url]);
    
    return (
        <Container fluid style={{padding: 0}}>
            <Row className={classes.HeaderRow} noGutters>
                <Col xl={{offset: 1, span: 3}} className={classes.NavColumn}>
                    <Navigation links={links} />
                </Col>
                <Col xl="8">
                    { // display agents image if we at exact /
                    props.match?.isExact &&
                     <img
                        draggable={false}
                        src="http://playvalorant.co.il/wp-content/uploads/2020/07/19201080333989.png"
                        alt="Agents"
                        className="img-fluid" />}
                    <Route path={`${url}/:agent`} render={() => (
                        <Agent
                            in={isAgentLoad}
                            imgURL={agent?.imgURL}
                            role={agent?.role}
                            biography={agent?.biography} />
                    )}  />
                </Col>
            </Row>
            {agent && (<Row className={classes.ContentRow} noGutters>
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
            </Row>)}
        </Container>
    )
}
