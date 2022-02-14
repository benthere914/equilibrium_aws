import { Alert, Button } from 'react-bootstrap'
const LogOut = () => {
    return (
    <>
        <div className='auth-form'>
            <Alert variant='info'>
                <Alert.Heading>Log Out</Alert.Heading>
                <p>
                    Are you sure you want to log out?
                    You will not be able to comment or post any other content.
                </p>
                <Button variant='success'>Log Out</Button>{' '}
                <Button variant='success'>Cancel</Button>
            </Alert>
        </div>
    </>
    )
}

export default LogOut
