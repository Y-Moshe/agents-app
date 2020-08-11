import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Slider, { Settings } from 'react-slick';

import classes from './Navigation.module.scss';
import { ILink, getLinks } from '../../API';

function Navigation() {
    const [links, setLinks] = useState<ILink[]>([]); // array of link objects { id, name }

    // Fetch links once
    useEffect(() => {
        getLinks().then(links => {
            setLinks(links);
        }).catch(error => console.log(error));
    }, []);

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
                {links.map((agent, i) => (
                    <h3 key={agent.id}
                        className={classes.LinkHeader}>
                        <NavLink
                            draggable={false}
                            className={classes.Link}
                            activeClassName={classes.Active} // Active css class
                            to={{
                                pathname: '/'.concat(agent.name.toLowerCase()),
                                search: '?id='.concat(agent.id.toString())
                            }}>
                                <sup className={classes.Count}>{i+1}</sup>{agent.name.toUpperCase()}
                        </NavLink>
                    </h3>
                ))}
            </Slider>
        </nav>
    )
}

export default React.memo(Navigation);
