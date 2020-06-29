import React from 'react';
import { Route, useRouteMatch } from 'react-router';

import classes from './Agents.module.css';
import Navigation from '../../components/Navigation/Navigation';
import Agent from '../../components/Agent/Agent';
// import Abilities from '../../components/Abilities/Abilities';

export default function Agents(props: React.Props<any>) {
    let { url } = useRouteMatch();

    const links = ['JETT', 'RASE', 'BREACH', 'OMEN', 'BRIMSTONE',
        'PHOENIX', 'SAGE', 'SOVA', 'VIPER', 'CYPHER', 'REYNA'];

    return (
        <React.Fragment>
            <header className={classes.AgentsHeader}>
                <Navigation links={links} />
                <Route path={`${url}/:agent`} component={Agent} />
            </header>
            <div className={classes.Spliter}></div>
            <div className={classes.AgentsContent}>
                {/* <Abilities /> */}
            </div>
        </React.Fragment>
    )
}
