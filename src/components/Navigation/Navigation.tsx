import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

import classes from './Navigation.module.css';

interface NavigationProps extends React.Props<any> {
    links: string[];
}

export default function Navigation(props: NavigationProps) {
    let { url } = useRouteMatch();

    const sliderConfig: Settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1374,
                settings: {
                    centerMode: true,
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    }

    return (
        <nav className={classes.Navigation}>
            <Slider {...sliderConfig} >
                {props.links.map((agentName, i) => (
                    <NavLink
                        key={i}
                        draggable={false}
                        activeClassName={classes.Active}
                        to={`${url}/${agentName.toLowerCase()}`}>
                        <h3 style={{height: 0}}>
                            <sup className={classes.Count}>{i+1}</sup> {agentName}
                        </h3>
                    </NavLink>
                ))}
            </Slider>
        </nav>
    )
}
