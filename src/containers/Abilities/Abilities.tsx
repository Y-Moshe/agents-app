import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import classes from './Abilities.module.scss';
import Ability from '../../components/Ability/Ability';
import { AbilityData } from '../../AgentsData';

interface AbilitiesProps extends React.Props<any> {
    abilities: AbilityData[];
    // onClick event to update the relevant video.
    onClick: (index: number) => void;
}

const duration = 300;

const defaultStyle = {
    transition: `${duration}ms`,
    opacity: 0
};

// "in&hide" states animation styles
const abilitiesInfoStyles: any = {
    entering: { opacity: 0, transform: 'translateX(50px)' },
    entered:  { opacity: 1, transform: 'none' },
    exiting:  { opacity: 0, transform: 'translateX(-50px)' },
    exited:   { opacity: 0, transform: 'none' }
};

export default function Abilities(props: AbilitiesProps) {
    const [ability, setAbility] = useState<AbilityData>(); // hold ability object
    const [showInfo, setShowInfo] = useState(true); // hold transition / animation trigger
    const [isActive, setIsActive] = useState(0); // hold the index of the ability in abilities array.

    // function to execute whenever ability object changes.
    useEffect(() => {
        // hide info, which is ability name and description by animate them
        setShowInfo(false);
        setTimeout(() => {
            // after the ${duration}ms display them with animation set.
            setShowInfo(true);
        }, duration);
    }, [ability]);
    
    // this function will fire whenever all abilities agent change
    // which is when diffrent agent was selected
    useEffect(() => {
        // reset selected current ability
        setAbility(undefined);
        // set the video active to the first ability as the default.
        setIsActive(0);
    }, [props.abilities]);

    const handleClick = (index: number) => {
        // @ts-ignore
        setAbility({ ...props.abilities[index] })
        setIsActive(index);
        props.onClick(index); // that functioin will set the relevant video
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
            <h2 className={classes.AbilitiesTitle}>יכולות מיוחדות</h2>
            <div
                dir="rtl"
                className={classes.AbilitiesImages}>
                {abilities}
            </div>
            <Transition
                in={showInfo}
                timeout={duration}>
                {state => (
                    <div dir="rtl" style={{
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
