import axios, { AxiosResponse } from 'axios';

export interface ILink {
    id: number;
    name: string;
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

/**
 * Get links array from the DB.
 * @returns A Promise with an array of ILink interface.
 */
export function getLinks(): Promise<ILink[]> {
    return API.get('/agents');
}

/**
 * Get a specific agent object using his id from the DB.
 * @param id Agent ID Number.
 * @returns A Promise with the agent object (IAgent).
 */
export function getAgent(id: number): Promise<IAgent> {
    return new Promise<IAgent>((resolve, reject) => {
        API.get('/'.concat(id.toString())).then((response: AxiosResponse) => {
            const agentData = {
                ...response.data,
                abilities: JSON.parse(response.data.abilities)
            };

            resolve(agentData);
        }).catch(error => reject(error));
    })
}

export default API;
