import { Alert, Button } from 'react-bootstrap'
const DeleteUser = () => {
    return (
    <>
        <div className='auth-form'>
            <Alert variant='danger'>
                <Alert.Heading>Delete Account</Alert.Heading>
                <p>
                    Are you sure you want to delete your account?
                    You will not have access to any content you have created.
                </p>
                <Button variant='danger'>Delete Account</Button>{' '}
                <Button variant='success'>Cancel</Button>
            </Alert>
        </div>
    </>
    )
}

export default DeleteUser
