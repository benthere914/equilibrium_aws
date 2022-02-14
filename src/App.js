import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import NavBar from './components/navbar';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
import SignUp from './components/auth/signup';
import LogIn from './components/auth/login';
import Demo from './components/auth/demo';
import LogOut from './components/auth/logout';
import DeleteUser from './components/auth/deleteUser';
Amplify.configure(awsconfig);

function App() {
	return (
		<>
			<BrowserRouter>
				<Switch>
					<Route path={'/'} exact={true}>
						<NavBar />
					</Route>
					<Route path={'/signup'}>
						<NavBar />
						<SignUp />
					</Route>

					<Route path={'/login'}>
						<NavBar />
						<LogIn />
					</Route>
					<Route path={'/demo'}>
						<NavBar />
						<Demo />
					</Route>
                    <Route path={'/logout'}>
                        <NavBar/>
                        <LogOut/>
                    </Route>
                    <Route path={'/delete-user'}>
                        <NavBar/>
                        <DeleteUser/>
                    </Route>
				</Switch>
			</BrowserRouter>
		</>
	);
}

export default App;
