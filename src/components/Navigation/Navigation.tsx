import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

import classes from './Navigation.module.scss';

interface NavigationProps extends React.Props<any> {
    links: string[];
}

export default function Navigation(props: NavigationProps) {
    let { url } = useRouteMatch();

    // Slider settings, and responsive configuration.
    const settings: Settings = {
        arrows: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 4,
        vertical: true,
        verticalSwiping: true,
        responsive: [
            {
                breakpoint: 1200, // On less then 1200px
                settings: {
                    centerMode: true,
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            },
            {
                breakpoint: 768, // On less then 768px
                settings: {
                    centerMode: true,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    vertical: false,
                    verticalSwiping: false,
                }
            }
        ]
    };

    return (
        <nav className={classes.Navigation}>
            <Slider {...settings} >
                {props.links.map((agentName, i) => (
                    <h3 key={`${agentName}-${i}`}
                        className={classes.LinkHeader}>
                        <NavLink
                            draggable={false}
                            className={classes.Link}
                            activeClassName={classes.Active} // Active css class
                            to={`${url}/${agentName.toLowerCase()}`}>
                                <sup className={classes.Count}>{i+1}</sup>{agentName}
                        </NavLink>
                    </h3>
                ))}
            </Slider>
        </nav>
    )
}
