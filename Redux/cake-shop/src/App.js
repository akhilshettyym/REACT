import { Provider } from 'react-redux'
import store from './redux/store'
import CakeContainer from './components/CakeContainer';
import IceContainer from './components/iceContainer';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer />
        <IceContainer />
      </div>
    </Provider>
  );
}

export default App;