import axios from 'axios';

export interface ILink {
    id: number;
    name: string;
    imgURL: string; // not used for this project
}

export interface IAbility {
    name: string;
    description: string;
    image: string;
    videoURL: string;
}

export interface IAgent {
    name: string;
    imgURL: string;
    role: string;
    biography: string;
    abilities: IAbility[];
}

const API = axios.create({
    // baseURL: 'http://playvalorant.co.il/wp-json/agents-api/v1' // for production
    baseURL: 'http://localhost/index.php/wp-json/agents-api/v1' // for development
});

export default API;
