import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import CoinListing from './components/CoinListing';
import CoinDetails from './components/CoinDetails';
import history from '../src/utils/history'
function App() {
  return (
    <BrowserRouter history={history}>
    <div className="App">
      <Switch>
          <Route exact={true} path="/" component={CoinListing} />
          <Route exact={true} path="/coins/:coin_name" component={CoinDetails} />
        </Switch>
    </div>
    </BrowserRouter>
  );
}

export default App;
