import { AppRouter } from './app/router/Approuter';
import './index.css'
import { Provider } from 'react-redux';
import store from './app/store';

function App() {
  return (
    <Provider store={store}>
      <AppRouter/>
    </Provider>
  );
}

export default App;
