export interface AbilityData {
    // Ability name
    name: string;
    // Ability description
    description: string;
    // Path to the Ability image
    image: string;
    // Path to the ability video
    videoURL: string;
}

export interface AgentData {
    name: string;
    image: string;
    role: string;
    biography: string;
    abilities: AbilityData[];
}

const agentsData: AgentData[] = [
    {
        name: 'Jett',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/jett.png',
        role: 'DUELIST',
        biography: 'Representing her home country of South Korea, Jett\'s agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.',
        abilities: [
            {
                name: 'Q - UPDRAFT',
                description: 'INSTANTLY propel Jett high into the air.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Jett_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Jett_Q_v001_web.mp4'
            },
            {
                name: 'E - TAILWIND',
                description: 'INSTANTLY propel Jett in the direction she is moving. If Jett is standing still, she will propel forward.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Jett_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Jett_E_v001_web.mp4'
            },
            {
                name: 'C - CLOUDBURST',
                description: 'INSTANTLY throw a projectile that expands into a brief vision-blocking cloud on impact with a surface. HOLD the ability key to curve the smoke in the direction of your crosshair.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Jett_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Jett_C_v001_web.mp4'
            },
            {
                name: 'X - BLADE STORM',
                description: 'EQUIP a set of highly accurate knives that recharge on killing an opponent. FIRE to throw a single knife at your target. ALTERNATE FIRE to throw all remaining daggers at your target.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Jett_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Jett_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Raze',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/07/V_AGENTS_587x900_ALL_Raze.png',
        role: 'DUELIST',
        biography: 'Raze explodes out of Brazil with her big personality and big guns. With her blunt-force-trauma playstyle, she excels at flushing entrenched enemies and clearing tight spaces with a generous dose of “boom.”',
        abilities: [
            {
                name: 'Q - BLAST PACK',
                description: 'INSTANTLY throw a Blast Pack that will stick to surfaces. RE-USE the ability after deployment to detonate, damaging and moving anything hit. Raze isn\'t damaged by this ability, but will still take fall damage if launched up far enough.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Raze_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Raze_Q_v001_web.mp4'
            },
            {
                name: 'E - PAINT SHELLS',
                description: 'EQUIP a cluster grenade. FIRE to throw the grenade, which does damage and creates sub-munitions, each doing damage to anyone in their range.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Raze_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Raze_E_v001_web.mp4'
            },
            {
                name: 'C - BOOM BOT',
                description: 'EQUIP a Boom Bot. FIRE will deploy the bot, causing it to travel in a straight line on the ground, bouncing off walls. The Boom Bot will lock on to any enemies in its frontal cone and chase them, exploding for heavy damage if it reaches them.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Raze_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Raze_C_v001_web.mp4'
            },
            {
                name: 'X - SHOWSTOPPER',
                description: 'EQUIP a rocket launcher. FIRE shoots a rocket that does massive area damage on contact with anything.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Raze_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Raze_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Breach',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Breach.png',
        role: 'INITIATOR',
        biography: 'Breach, the bionic Swede, fires powerful, targeted kinetic blasts to aggressively clear a path through enemy ground. The damage and disruption he inflicts ensures no fight is ever fair.',
        abilities: [
            {
                name: 'Q - FLASHPOINT',
                description: 'EQUIP a blinding charge. FIRE the charge to set fast-acting burst through the wall. The charge detonates to blind all players looking at it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Breach_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Breach_Q_v001_web.mp4'
            },
            {
                name: 'E - FAULT LINE',
                description: 'EQUIP a seismic blast. HOLD FIRE to increase the distance. RELEASE to set off the quake, dazing all players in its zone and in a line up to the zone.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Breach_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Breach_E_v001_web.mp4'
            },
            {
                name: 'C - AFTERSHOCK',
                description: 'EQUIP a fusion charge. FIRE the charge to set a slow-acting burst through the wall. The burst does heavy damage to anyone caught in its area.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Breach_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Breach_C_v001_web.mp4'
            },
            {
                name: 'X - ROLLING THUNDER',
                description: 'EQUIP a seismic charge. FIRE to send a cascading quake through all terrain in a large cone. The quake dazes and knocks up anyone caught in it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Breach_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Breach_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Omen',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Omen.png',
        role: 'CONTROLLER',
        biography: 'A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.',
        abilities: [
            {
                name: 'Q - PARANOIA',
                description: 'INSTANTLY fire a shadow projectile forward, briefly reducing the vision range of all players it touches. This projectile can pass straight through walls.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Omen_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Omen_Q_v001_web.mp4'
            },
            {
                name: 'E - DARK COVER',
                description: 'EQUIP a shadow orb and see its range indicator. FIRE to throw the shadow orb to the marked location, creating a long-lasting shadow sphere that blocks vision. HOLD ALTERNATE FIRE while targeting to move the marker further away. HOLD the ability key with targeting to move the market closer.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Omen_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Omen_E_v001_web.mp4'
            },
            {
                name: 'C - SHROUDED STEP',
                description: 'EQUIP a shadow walk ability and see its range indicator. FIRE to begin a brief channel, then teleport to the marked location.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Omen_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Omen_C_v001_web.mp4'
            },
            {
                name: 'X - FROM THE SHADOWS',
                description: 'EQUIP a tactical map. FIRE to begin teleporting to the selected location. While teleporting, Omen will appear as a Shade that can be destroyed by an enemy to cancel his teleport.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Omen_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Omen_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Brimstone',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Brimstone.png',
        role: 'CONTROLLER',
        biography: 'Joining from the USA, Brimstone\'s orbital arsenal ensures his squad always has the advantage. His ability to deliver utility precisely and from a distance make him an unmatched boots-on-the-ground commander.',
        abilities: [
            {
                name: 'Q - INCENDIARY',
                description: 'EQUIP an incendiary grenade launcher. FIRE to launch a grenade that detonates as it comes to a rest on the floor, creating a lingering fire zone that damages players within the zone.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Brimstone_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Brimstone_Q_v001_web.mp4'
            },
            {
                name: 'E - SKY SMOKE',
                description: 'EQUIP a tactical map. FIRE to set locations where Brimstone’s smoke clouds will land. ALTERNATE FIRE to confirm, launching long-lasting smoke clouds that block vision in the selected area.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Brimstone_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Brimstone_E_v001_web.mp4'
            },
            {
                name: 'C - STIM BEACON',
                description: 'EQUIP a stim beacon. FIRE to toss the stim beacon in front of Brimstone. Upon landing, the stim beacon will create a field that grants players RapidFire.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Brimstone_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Brimstone_C_v001_web.mp4'
            },
            {
                name: 'X - ORBITAL STRIKE',
                description: 'EQUIP a tactical map. FIRE to launch a lingering orbital strike laser at the selected location, dealing high damage-over-time to players caught in the selected area.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Brimstone_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Brimstone_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Phoenix',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Phx.png',
        role: 'DUELIST',
        biography: 'Hailing from the U.K., Phoenix\'s star power shines through in his fighting style, igniting the battlefield with flash and flare. Whether he\'s got backup or not, he\'ll rush into a fight on his own terms.',
        abilities: [
            {
                name: 'Q - CURVEBALL',
                description: 'EQUIP a flare orb that takes a curving path and detonates shortly after throwing. FIRE to curve the flare orb to the left, detonating and blinding any player who sees the orb. ALTERNATE FIRE to curve the flare orb to the right.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Pheonix_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Phoenix_Q_v001_web.mp4'
            },
            {
                name: 'E - HOT HANDS',
                description: 'EQUIP a fireball. FIRE to throw a fireball that explodes after a set amount of time or upon hitting the ground, creating a lingering fire zone that damages enemies.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Pheonix_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Phoenix_E_v001_web.mp4'
            },
            {
                name: 'C - BLAZE',
                description: 'EQUIP a flame wall. FIRE to create a line of flame that moves forward, creating a wall of fire that blocks vision and damages players passing through it. HOLD FIRE to bend the wall in the direction of your crosshair.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Pheonix_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Phoenix_C_v001_web.mp4'
            },
            {
                name: 'X - RUN IT BACK',
                description: 'INSTANTLY place a marker at Phoenix’s location. While this ability is active, dying or allowing the timer to expire will end this ability and bring Phoenix back to this location with full health.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Pheonix_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Phoenix_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Sage',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_sage.png',
        role: 'SENTINEL',
        biography: 'The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.',
        abilities: [
            {
                name: 'Q - SLOW ORB',
                description: 'EQUIP a slowing orb. FIRE to throw a slowing orb forward that detonates upon landing, creating a lingering field that slows players caught inside of it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sage_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sage_Q_v001_web.mp4'
            },
            {
                name: 'E - HEALING ORB',
                description: 'EQUIP a healing orb. FIRE with your crosshairs over a damaged ally to activate a heal-over-time on them. ALT FIRE while Sage is damaged to activate a self heal-over-time.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sage_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sage_E_v001_web.mp4'
            },
            {
                name: 'C - BARRIER ORB',
                description: 'EQUIP a barrier orb. FIRE places a solid wall. ALT FIRE rotates the targeter.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sage_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sage_C_v001_web.mp4'
            },
            {
                name: 'X - RESURRECTION',
                description: 'EQUIP a resurrection ability. FIRE with your crosshairs placed over a dead ally to begin resurrecting them. After a brief channel, the ally will be brought back to life with full health.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sage_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sage_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Sova',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_ALL_Sova_2.png',
        role: 'INITIATOR',
        biography: 'Born from the eternal winter of Russia\'s tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.',
        abilities: [
            {
                name: 'Q - SHOCK BOLT',
                description: 'EQUIP a bow with a shock bolt. FIRE to send the explosive forward, detonating upon collision and damaging players nearby. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sova_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sova_Q_v001_web.mp4'
            },
            {
                name: 'E - RECON BOLT',
                description: 'EQUIP a bow with a recon bolt. FIRE to send the recon bolt forward, activating upon collision and revealing the location of nearby enemies caught in the line of sight of the bolt. HOLD FIRE to extend the range of the projectile. ALTERNATE FIRE to add up to two bounces to this arrow.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sova_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sova_E_v001_web.mp4'
            },
            {
                name: 'C - OWL DRONE',
                description: 'EQUIP an owl drone. FIRE to deploy and take control of movement of the drone. While in control of the drone, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sova_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sova_C_v001_web.mp4'
            },
            {
                name: 'X - HUNTER’S FURY',
                description: 'EQUIP a bow with three long-range wall-piercing energy blasts. FIRE to release an energy blast in a line in front of Sova, dealing damage and revealing the location of enemies caught in the line. This ability can be RE-USED up to two more times while the ability timer is active.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Sova_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Sova_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Viper',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Viper.png',
        role: 'CONTROLLER',
        biography: 'The American chemist, Viper deploys an array of poisonous chemical devices to control the battlefield and cripple the enemy\'s vision. If the toxins don\'t kill her prey, her mind games surely will.',
        abilities: [
            {
                name: 'Q - POISON CLOUD',
                description: 'EQUIP a gas emitter. FIRE to throw the emitter that perpetually remains throughout the round. RE-USE the ability to create a toxic gas cloud at the cost of fuel. This ability can be RE-USED more than once and can be picked up to be REDEPLOYED.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Viper_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Viper_Q_v001_web.mp4'
            },
            {
                name: 'E - TOXIC SCREEN',
                description: 'EQUIP a gas emitter launcher. FIRE to deploy a long line of gas emitters. RE-USE the ability to create a tall wall of toxic gas at the cost of fuel. This ability can be RE-USED more than once.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Viper_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Viper_E_v001_web.mp4'
            },
            {
                name: 'C - SNAKE BITE',
                description: 'EQUIP a chemical launcher. FIRE to launch a canister that shatters upon hitting the floor, creating a lingering chemical zone that damages and slows enemies.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Viper_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Viper_C_v001_web.mp4'
            },
            {
                name: 'X - VIPER’S PIT',
                description: 'EQUIP a chemical sprayer. FIRE to spray a chemical cloud in all directions around Viper, creating a large cloud that reduces the vision range and maximum health of players inside of it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Viper_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Viper_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Cypher',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Cypher.png',
        role: 'SENTINEL',
        biography: 'The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy\'s every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.',
        abilities: [
            {
                name: 'Q - CYBER CAGE',
                description: 'INSTANTLY toss the cyber cage in front of Cypher. Activate to create a zone that blocks vision and slows enemies who pass through it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Cypher_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Cypher_Q_v001_web.mp4'
            },
            {
                name: 'E - SPYCAM',
                description: 'EQUIP a spycam. FIRE to place the spycam at the targeted location. RE-USE this ability to take control of the camera’s view. While in control of the camera, FIRE to shoot a marking dart. This dart will reveal the location of any player struck by the dart.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Cypher_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Cypher_E_v001_web.mp4'
            },
            {
                name: 'C - TRAPWIRE',
                description: 'EQUIP a trapwire. FIRE to place a destructible and covert tripwire at the targeted location creating a line that spans between the placed location and the wall opposite. Enemy players who cross a tripwire will be tethered, revealed, and dazed after a short period if they do not destroy the device in time. This ability can be picked up to be REDEPLOYED.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Cypher_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Cypher_C_v001_web.mp4'
            },
            {
                name: 'X - NEURAL THEFT',
                description: 'INSTANTLY use on a dead enemy player in your crosshairs to reveal the location of all living enemy players.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Cypher_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Cypher_X_v001_web.mp4'
            }
        ]
    },
    {
        name: 'Reyna',
        image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/V_AGENTS_587x900_Reyna.png',
        role: 'DUELIST',
        biography: 'Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.',
        abilities: [
            {
                name: 'Q - DEVOUR',
                description: 'Enemies killed by Reyna leave behind Soul Orbs that last 3 seconds. INSTANTLY consume a nearby soul orb, rapidly healing for a short duration. Health gained through this skill exceeding 100 will decay over time. If EMPRESS is active, this skill will automatically cast and not consume the orb.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Reyna_Q.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Reyna_Q_v001_web.mp4'
            },
            {
                name: 'E - DISMISS',
                description: 'INSTANTLY consume a nearby soul orb, becoming intangible for a short duration. If EMPRESS is active, also become invisible.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Reyna_E.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Reyna_E_v002_web.mp4'
            },
            {
                name: 'C - LEER',
                description: 'EQUIP an ethereal destructible eye. ACTIVATE to cast the eye a short distance forward. The eye will Nearsight all enemies who look at it.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Reyna_C.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Reyna_C_v002_web.mp4'
            },
            {
                name: 'X - EMPRESS',
                description: 'INSTANTLY enter a frenzy, increasing firing speed, equip and reload speed dramatically. Scoring a kill renews the duration.',
                image: 'http://playvalorant.co.il/wp-content/uploads/2020/06/TX_Reyna_X.png',
                videoURL: 'http://playvalorant.co.il/wp-content/uploads/2020/06/Reyna_X_v001_web.mp4'
            }
        ]
    }
];

// Get a specific agent from the list of agents
export function getAgent(agentName: string): AgentData | undefined {
    if (!agentName) {
        return undefined;
    }
    const agent = agentsData.find(agentData =>
         agentData.name.toLowerCase() === agentName.toLowerCase());

    return agent || undefined;
}

export default agentsData;
