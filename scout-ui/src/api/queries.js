import { ScoutDto } from "./ScoutDto";

export const getScouts = () => {
    let auth = process.env.REACT_APP_AUTH;
    return fetch('https://scouts.azurewebsites.net/odata/Scouts', {
    method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': auth
        },
    })
    .then(response => response.json())
    .then(json => json.value)
}

export const createScout = (scout) => {
    let auth = process.env.REACT_APP_AUTH;
    return fetch('https://scouts.azurewebsites.net/odata/CreateScout', {
    method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json;charset=UTF-8',
            'Authorization': auth
        },
        body: JSON.stringify(new ScoutDto(scout).scout)
    })
}