import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Amplify from 'aws-amplify';
import awsconfig from './aws-exports';
import SignUp from './components/auth/signup';
import LogIn from './components/auth/login';
import Demo from './components/auth/demo';
import LogOut from './components/auth/logout';
import DeleteUser from './components/auth/deleteUser';
import { useState } from 'react';
Amplify.configure(awsconfig);

function App() {
    const [user, setUser] = useState('');
	return (
		<>
			<BrowserRouter>
				<NavBar user={user}/>
				<Switch>
					<Route path={'/'} exact={true}>
					</Route>
					<Route path={'/signup'}>
						<SignUp setUser={setUser}/>
					</Route>
					<Route path={'/login'}>
						<LogIn />
					</Route>
					<Route path={'/demo'}>
						<Demo />
					</Route>
                    <Route path={'/logout'}>
                        <LogOut/>
                    </Route>
                    <Route path={'/delete-user'}>
                        <DeleteUser/>
                    </Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
