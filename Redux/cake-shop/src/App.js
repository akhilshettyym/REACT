import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import IceContainer from './components/iceContainer';
import HooksCakeContainer from './components/hooksCakeContainer';
import NewCakeContainer from './components/NewCakeContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceContainer />
        <HooksCakeContainer />
        <NewCakeContainer />
      </div>
    </Provider>
  );
}

export default App;