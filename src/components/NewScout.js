import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { createScout, getScouts } from '../api/queries';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const NewScout = () => {
    const { isAuthenticated } = useAuth0();

    const [title, setTitle] = useState('');
    const [notes, setNotes] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        createScout({title, notes})
    }

    if (isAuthenticated)
    {
        return (
            <>
                <div className="container">
                    <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Title</Form.Label>
                            <Form.Control placeholder="Enter title" 
                                onChange={({target:{value}}) => setTitle(value)}
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Notes</Form.Label>
                            <Form.Control as="textarea" rows={3} placeholder="Enter notes"
                                onChange={({target:{value}}) => setNotes(value)}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>
            </>
        )
    }
    return <><div>Not authenticated</div></>
}

export default NewScout


