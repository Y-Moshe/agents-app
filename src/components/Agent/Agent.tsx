import React from 'react';

import classes from './Agent.module.css';

interface AgentProps extends React.Props<any> {
    // Path to image
    image: string | undefined;
    // Agent role
    role: string | undefined;
    //  Agent Biography
    biography: string | undefined;
}

export default function Agent(props: AgentProps) {
    return (
        <div className={classes.AgentContainer}>
            <img src={props?.image} alt="agent" className={classes.AgentImage} />
            <div className={classes.AgentInfo}>
                <span>// ROLE</span>
                <h3>{props?.role}</h3>
                <span>// BIOGRAPHY</span>
                <p>{props?.biography}</p>
            </div>
        </div>
    )
}
