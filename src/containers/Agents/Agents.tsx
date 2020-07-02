import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, useLocation, matchPath } from 'react-router';
import { PuffLoader } from 'react-spinners';

import classes from './Agents.module.css';
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

export default function Agents(props: React.Props<any>) {
    const { url } = useRouteMatch();
    const location = useLocation();

    const [agent, setAgent] = useState<AgentData>();
    const [activeVideo, setActiveVideo] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [isAgentLoad, setIsAgentLoad] = useState(false);

    useEffect(() => {
        const params: any = getParams(location.pathname, url);

        if (params && params.agent) {
            setAgent(getAgent(params.agent));
            setActiveVideo(0);
            setIsAgentLoad(false);
            setTimeout(() => {
                setIsAgentLoad(true);
            }, 200);
        }

    }, [location, url]);

    const links = AgentsData.map(agentObject => agentObject.name.toUpperCase());

    return (
        <React.Fragment>
            <header className={classes.AgentsHeader}>
                <Navigation links={links} />
                <Route path={`${url}/:agent`} render={() => (
                    <Agent
                        in={isAgentLoad}
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
                <div className={classes.Video}>
                    <PuffLoader
                        size={200}
                        loading={isLoading}
                        color="white" />
                    <video
                        hidden={isLoading}
                        loop
                        autoPlay
                        onLoadStart={() => setIsLoading(true)}
                        onLoadedData={() => setIsLoading(false)}
                        src={agent?.abilities[activeVideo].videoURL}>
                    </video>
                </div>
            </div>}
        </React.Fragment>
    )
}
