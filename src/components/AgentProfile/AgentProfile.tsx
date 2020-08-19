import React from 'react';
import { Transition } from 'react-transition-group';

import classes from './AgentProfile.module.scss';

const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
};

// "in&hide" states animation styles
const agentInfoStyles: any = {
    entering: { opacity: 0, transform: 'translateY(-100px)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'translateY(100px)' },
    exited:   { opacity: 0, transform: 'none' }
};

// "in&hide" states animation styles
const agentImageStyles: any = {
    entering: { opacity: 0, transform: 'scale(0.9)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'scale(0.9)' },
    exited:   { opacity: 0, transform: 'none' }
};

interface AgentProfileProps extends React.Props<any> {
    imgURL: string | undefined;
    role: string | undefined;
    biography: string | undefined;
    // Animation state control, true = animate "in to the VIEW", false = "hide from the VIEW"
    in: boolean;
}

export default function AgentProfile(props: AgentProfileProps) {
    return (
        <div className={classes.AgentContainer}>
            <Transition
                in={props.in}
                timeout={duration}>
                {state => (<>
                    <img
                        style={{
                            ...defaultStyle,
                            ...agentImageStyles[state]
                        }}
                        draggable={false}
                        src={props.imgURL}
                        alt="Agent"
                        className={classes.AgentImage} />

                    <div
                        className={classes.AgentInfo}
                        style={{
                            ...defaultStyle,
                            ...agentInfoStyles[state]
                        }}>
                        <span>// תפקיד</span>
                        <p>{props.role}</p>
                        <span>// ביוגרפיה</span>
                        <p>{props.biography}</p>
                    </div>
                </>)}
            </Transition>
        </div>
    )
}
