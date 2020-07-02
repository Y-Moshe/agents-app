import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import classes from './Abilities.module.css';
import Ability from '../../components/Ability/Ability';
import { AbilityData } from '../../AgentsData';

interface AbilitiesProps extends React.Props<any> {
    abilities: AbilityData[];
    onClick: (index: number) => void;
}

const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
};

const abilitiesInfoStyles: any = {
    entering: { opacity: 0, transform: 'translateX(-50px)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'translateX(50px)' },
    exited:   { opacity: 0, transform: 'none' }
};

export default function Abilities(props: AbilitiesProps) {
    const [ability, setAbility] = useState<AbilityData>();
    const [showInfo, setShowInfo] = useState(true);
    const [isActive, setIsActive] = useState(0);

    useEffect(() => {
        setShowInfo(false);
        setTimeout(() => {
            setShowInfo(true);
        }, 200);
    }, [ability]);
    
    useEffect(() => {
        setAbility(undefined);
        setIsActive(0);
    }, [props.abilities]);

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

    const defualtAbilityName = props.abilities[0].name;
    const defualtAbilityDescription = props.abilities[0].description;
    
    return (
        <div className={classes.Abilities}>
            <h2 className={classes.AbilitiesTitle}>SPECIAL ABILITIES</h2>
            <div className={classes.AbilitiesImages}>
                {abilities}
            </div>
            <Transition in={showInfo} timeout={duration}>
                {state => (
                    <div style={{
                        ...defaultStyle,
                        ...abilitiesInfoStyles[state]
                    }}>
                        <h3 className={classes.AbilityTitle}>{ability ? ability.name : defualtAbilityName}</h3>
                        <p className={classes.AbilityDescription}>{ability ? ability.description : defualtAbilityDescription}</p>
                    </div>
                )}
            </Transition>
        </div>
    );
}
