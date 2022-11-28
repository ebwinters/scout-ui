import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getScouts } from '../api/queries';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Scout = () => {
	const { user } = useAuth0();
    const { isAuthenticated } = useAuth0();
    const [ scouts, setScouts ] = useState([]);
    useEffect(() => {
        const getData = async () => {
            let data = await getScouts();
            setScouts(data);
        }
        getData()
    }, [])

    if (isAuthenticated && scouts.length > 0)
    {
        return (
            <>
                <div className="container">
                    {
                        scouts.map((scout, index) => (
                            <Card key={index} className="scoutContainer">
                                <Card.Body>
                                    <Card.Title>{scout.title}</Card.Title>
                                    <Card.Text>{scout.notes}</Card.Text>
                                    <Button variant="primary">More details</Button>
                                </Card.Body>
                            </Card>
                        ))
                    }
                </div>
            </>
        )
    }
    return <><div>No scouts to show</div></>
}

export default Scout
