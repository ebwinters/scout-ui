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