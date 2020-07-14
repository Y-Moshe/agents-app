import React from 'react';

import classes from './Map.module.scss';
import { MapData } from '../../AgentsData';

interface MapProps extends React.Props<any>, MapData {
    onClick: () => void;
    isActive: boolean;
}

export default function Map(props: MapProps) {
    // Active class applied if props,isActive is.
    const classes2Set = [classes.MapContainer,
        props.isActive ? classes.Active : null];
    
    return (
        <div
            className={classes2Set.join(' ')}
            onClick={props.onClick}>
            <p>{props.name}</p>
            <img
                alt={props.name}
                src={props.imgURL} />
        </div>
    )
}
