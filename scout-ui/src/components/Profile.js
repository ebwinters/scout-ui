import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { getScouts } from '../api/queries';

const Profile = () => {
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
                            <div key={index}>
                            <p key={index} className="userInfo" id="userInfo1">
                                Scout ID: {scout.scoutId}
                            </p>
                            </div>
                        ))
                    }
                </div>
            </>
        )
    }
    return <><div>No scouts to show</div></>
}

export default Profile
