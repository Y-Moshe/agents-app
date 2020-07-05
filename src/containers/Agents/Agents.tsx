import React, { useEffect, useState } from 'react';
import { Route, useRouteMatch, matchPath, RouteChildrenProps } from 'react-router';
import { PuffLoader } from 'react-spinners';

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
            }, 200);
        }

    }, [props.location, url]);

    const links = AgentsData.map(agentObject => agentObject.name.toUpperCase());

    return (
        <React.Fragment>
            <header className={classes.AgentsHeader}>
                <Navigation links={links} />
                {props.match?.isExact && <div className={classes.AgentsBackgroundImage}></div>}
                <Route path={`${url}/:agent`} render={(p) => (
                    <Agent
                        {...p}
                        in={isAgentLoad}
                        image={agent?.image}
                        role={agent?.role}
                        biography={agent?.biography} />
                )}  />
            </header>
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
                        style={{display: isLoading ? 'none' : 'block'}}
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
