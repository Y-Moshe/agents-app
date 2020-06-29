import React from 'react';

import classes from './Agent.module.css';

interface AgentProps extends React.Props<any> {
    // Path to image
    image: string;
    // Agent role
    role: string;
    //  Agent Biography
    biography: string;
}

export default function Agent(props: AgentProps) {
    return (
        <div className={classes.AgentContainer}>
            <img src="http://playvalorant.co.il/wp-content/uploads/2020/06/jett.png" alt="agent" className={classes.AgentImage} />
            <div>
                <span>// ROLE</span>
                <h3>DUELIST</h3>
                {/* <h3>{props.role}</h3> */}
                <span>// BIOGRAPHY</span>
                <p>Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.</p>
                {/* <p>{props.biography}</p> */}
            </div>
        </div>
    )
}
