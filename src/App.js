import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import NavBar from './components/navbar';

function App() {
  return (
    <>
    <BrowserRouter>
        <Switch>
            <Route path={'/'}>
                <NavBar/>
            </Route>
        </Switch>
    </BrowserRouter>

    </>
  );
}

export default App;
