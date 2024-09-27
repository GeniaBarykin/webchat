import React from 'react';
import {PageIndex} from "./pages/index";
import { store } from './store/store'
import { Provider } from 'react-redux'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <PageIndex />
      </Provider>
    </div>
  );
}

export default App;
