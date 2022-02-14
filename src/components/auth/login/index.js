import './index.css'
import { useState } from 'react';
import {Form, Button, Alert} from 'react-bootstrap'

const LogIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
    <>
        <div className='auth-form'>
            <Alert variant='success'>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                        <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                    </Form.Group>

                    <Button variant="success" type="submit">Submit</Button>
                </Form>
            </Alert>
        </div>
    </>
    )
}

export default LogIn
