import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, useLocation, matchPath } from 'react-router';

import classes from './Agents.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Agent from '../../components/Agent/Agent';
import { getAgent, AgentData } from '../../AgentsData';
import Abilities from '../Abilities/Abilities';

const getParams = (pathname: string, url: string) => {
    const matchProfile = matchPath(pathname, {
        path: `${url}/:agent`,
        strict: false
    });
    return matchProfile && matchProfile.params;
};

export default function Agents(props: React.Props<any>) {
    const { url } = useRouteMatch();
    const location = useLocation();

    const [agent, setAgent] = useState<AgentData>();
    const [activeVideo, setActiveVideo] = useState(0);

    useEffect(() => {
        const params: any = getParams(location.pathname, url);

        if (params && params.agent) {
            setAgent(getAgent(params.agent));
        }

    }, [location, url]);

    const links = ['JETT', 'RAZE', 'BREACH', 'OMEN', 'BRIMSTONE',
        'PHOENIX', 'SAGE', 'SOVA', 'VIPER', 'CYPHER', 'REYNA'];

    return (
        <React.Fragment>
            <header className={classes.AgentsHeader}>
                <Navigation links={links} />
                <Route path={`${url}/:agent`} render={() => (
                    <Agent
                        image={agent?.image}
                        role={agent?.role}
                        biography={agent?.biography} />
                )}  />
            </header>
            <div className={classes.Spliter}></div>
            {agent && <div className={classes.AgentsContent}>
                <Abilities
                    abilities={agent?.abilities}
                    onClick={(index) => setActiveVideo(index)} />
                <video
                    className={classes.Video}
                    loop
                    autoPlay
                    src={agent?.abilities[activeVideo].videoURL}>
                </video>
            </div>}
        </React.Fragment>
    )
}
