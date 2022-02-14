import './index.css';
import {Form, Button, Alert} from 'react-bootstrap'
import { useState } from 'react';
const SignUp = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
	return (
		<>
            <div className='auth-form'>
			    <Alert variant='success'>
				    <Form>
                        <Form.Group className="mb-3" controlId="signUpFirstName">
                            <Form.Label>First name</Form.Label>
                            <Form.Control type="email" placeholder="Enter first name" value={firstName} onChange={(e) => {setFirstName(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signUpLastName">
                            <Form.Label>Last name</Form.Label>
                            <Form.Control type="email" placeholder="Enter first name" value={lastName} onChange={(e) => {setLastName(e.target.value)}}/>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signUpEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => {setEmail(e.target.value)}}/>
                            <Form.Text className="text-muted">We'll never share your email with anyone else.</Form.Text>
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="signUpPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => {setPassword(e.target.value)}}/>
                        </Form.Group>

                        <Button variant="success" type="submit">Submit</Button>
				    </Form>
                </Alert>
            </div>
		</>
	);
};

export default SignUp;
