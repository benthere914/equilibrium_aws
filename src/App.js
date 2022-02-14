import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar';
import Amplify, { Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
            <Route path={'/'}>
                <NavBar/>
            </Route>
            <Route path={'/signup'}>

            </Route>

            <Route path={'/login'}>

            </Route>
            <Route path={'/demo'}>

            </Route>
        </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
