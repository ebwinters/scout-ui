export const getScouts = () => {
    let auth = process.env.REACT_APP_AUTH;
    console.log("AUTH", auth);
    return fetch('https://scouts.azurewebsites.net/odata/Scouts', {
    method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Authorization': "Basic RXRoYW46V2ludGVycw=="
        },
    })
    .then(response => response.json())
    .then(json => json.value)
}