import React, { useState, useEffect } from 'react';
import { Transition } from 'react-transition-group';

import classes from './Abilities.module.scss';
import Ability from '../../components/Ability/Ability';
import { IAbility } from '../../API';

interface AbilitiesProps extends React.Props<any> {
    abilities: IAbility[];
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
    const [ability, setAbility] = useState<IAbility>(); // hold ability object
    const [showInfo, setShowInfo] = useState(true); // hold transition / animation trigger
    const [activeAbility, setActiveAbility] = useState(0); // hold the index of the ability in abilities array.
    
    // this function will fire whenever all abilities agent change
    // which is when diffrent agent was selected
    useEffect(() => {
        // reset selected current ability to the first
        setAbility({ ...props.abilities[0] });
        // set the active ability to the first ability as the default.
        setActiveAbility(0);
    }, [props.abilities]);

    const handleClick = (index: number) => {
        setShowInfo(false); // hide, animation is applied
        setTimeout(() => {
            // after the ${duration}ms display them with animation style set.
            setShowInfo(true);
            setAbility({ ...props.abilities[index] }); // will set the clicked ability
            setActiveAbility(index);
            props.onClick(index); // that function will set the relevant video based on that index
        }, duration);
    };

    const abilities = props.abilities?.map((ability, index) => (
        <Ability
            key={`${ability?.name}-${index}`}
            active={activeAbility === index}
            name={ability.name}
            image={ability.image}
            onClick={() => handleClick(index)} />
    ));
    
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
                        <h3 className={classes.AbilityTitle}>{ability?.name}</h3>
                        <p className={classes.AbilityDescription}>{ability?.description}</p>
                    </div>
                )}
            </Transition>
        </div>
    );
}
