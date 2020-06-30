import React, { useState } from 'react';

import classes from './Abilities.module.css';
import Ability from '../../components/Ability/Ability';
import { AbilityData } from '../../AgentsData';

interface AbilitiesProps extends React.Props<any> {
    abilities: AbilityData[] | undefined;
    onClick: (index: number) => void;
}

export default function Abilities(props: AbilitiesProps) {
    const [ability, setAbility] = useState<AbilityData>();
    const [isActive, setIsActive] = useState(0);

    const handleClick = (index: number) => {
        // @ts-ignore
        setAbility({ ...props.abilities[index] })
        setIsActive(index);
        props.onClick(index);
    };
    
    const abilities = props.abilities?.map((ability, index) => (
        <Ability
            key={ability.name.toLowerCase()}
            active={isActive === index}
            name={ability.name}
            onClick={() => handleClick(index)}
            image={ability.image} />
    ));

    return (
        <div className={classes.Abilities}>
            <h2 className={classes.AbilitiesTitle}>SPECIAL ABILITIES</h2>
            <div className={classes.AbilitiesImages}>
                {abilities}
            </div>
            <h3 className={classes.AbilityTitle}>{ability?.name}</h3>
            <p className={classes.AbilityDescription}>{ability?.description}</p>
        </div>
    );
}
