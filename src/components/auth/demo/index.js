import { Alert, Button } from 'react-bootstrap'
import './index.css'
const Demo = () => {
    return (
    <>
        <div className='auth-form'>
            <Alert variant='success'>
                <Alert.Heading>Login as Demo User</Alert.Heading>
                <p>
                By clicking the button below, you will login to the site as a demo user.
                If you instead want to login as another user or sign up, click on one of the links above
                </p>
                <Button variant='success'>Sign In as Demo</Button>
            </Alert>
        </div>
    </>
    )
}

export default Demo
