import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

import classes from './Navigation.module.scss';

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
                    <h3 key={`${agentName}-${i}`}>
                        <NavLink
                            draggable={false}
                            className={classes.Link}
                            activeClassName={classes.Active}
                            to={`${url}/${agentName.toLowerCase()}`}>
                                <sup className={classes.Count}>{i+1}</sup>{agentName}
                        </NavLink>
                    </h3>
                ))}
            </Slider>
        </nav>
    )
}
