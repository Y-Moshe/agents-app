import React, { useState } from 'react';

import classes from './Maps.module.scss';
import { MapData } from '../../AgentsData';
import Map from '../../components/Map/Map';

interface MapsProps extends React.Props<any> {
    maps: MapData[];
    onMapClick: (mapName: string) => void;
}

export default function Maps(props: MapsProps) {
    const [activeMap, setActiveMap] = useState(''); // hold the active map name

    const handleClick = (mapName: string) => {
        setActiveMap(mapName);
        props.onMapClick(mapName);
    };

    // looping through all maps available
    const maps = props.maps.map(map => (
        <Map
            key={map.name}
            isActive={map.name === activeMap}
            name={map.name}
            onClick={() => handleClick(map.name)}
            imgURL={map.imgURL} />
    ));

    return (
        <div className={classes.MapsContainer}>
            {maps}
        </div>
    )
}
