import App from './components/app/app';
import ContextProvider from './components/context-provider/context-provider';

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,
  document.querySelector('#root')
);
