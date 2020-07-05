import React from 'react';

import classes from './Ability.module.scss';

export interface AbilityProps extends React.Props<any> {
    // Ability name
    name: string;
    // Path to the Ability image
    image: string;
    active: boolean;
    onClick: () => void;
}

export default function Ability(props: AbilityProps) {
    const classes2Set = [classes.Ability, props.active ?
         classes.Active : null].join(' ');

    return (
        <div className={classes2Set} onClick={props.onClick} title={props.name}>
            <img draggable={false} src={props.image} alt={props.name} className={classes.AbilityImage} />
        </div>
    )
}
