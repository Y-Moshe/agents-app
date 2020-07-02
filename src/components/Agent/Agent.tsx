import React from 'react';
import { Transition } from 'react-transition-group';

import classes from './Agent.module.css';

interface AgentProps extends React.Props<any> {
    // Path to image
    image: string | undefined;
    // Agent role
    role: string | undefined;
    //  Agent Biography
    biography: string | undefined;
    in: boolean;
}


const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
}

const agentInfoStyles: any = {
    entering: { opacity: 0, transform: 'translateY(-100px)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'translateY(100px)' },
    exited:   { opacity: 0, transform: 'none' }
};

const agentImageStyles: any = {
    entering: { opacity: 0, transform: 'scale(0.9)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'scale(0.9)' },
    exited:   { opacity: 0, transform: 'none' }
};

export default function Agent(props: AgentProps) {
    return (
        <div className={classes.AgentContainer}>
            <Transition in={props.in} timeout={duration}>
                {state => (
                    <img
                        style={{
                            ...defaultStyle,
                            ...agentImageStyles[state]
                        }}
                        draggable={false}
                        src={props?.image}
                        alt="Agent"
                        className={classes.AgentImage} />
                )}
            </Transition>
            <Transition in={props.in} timeout={duration}>
                {state => (
                    <div className={classes.AgentInfo} style={{
                        ...defaultStyle,
                        ...agentInfoStyles[state]
                    }}>
                        <span>// ROLE</span>
                        <h3>{props?.role}</h3>
                        <span>// BIOGRAPHY</span>
                        <p>{props?.biography}</p>
                    </div>
                )}
            </Transition>
        </div>
    )
}
