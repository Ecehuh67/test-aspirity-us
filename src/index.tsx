import App from './components/app/app';
import thunk from 'redux-thunk';
import { reducer } from './reducer/reducer';
import { Provider } from 'react-redux';
import { createApi } from './api';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const api = createApi();
console.log(api);

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(thunk.withExtraArgument(api)))
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
