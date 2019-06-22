import React from 'react';
import {Provider} from 'react-redux';
import {configureStore} from "../store";
import Main from "./Main";

// import  fetchCurrentUser  from '../store/actions/actionCreator';

const store = configureStore();
// store.dispatch(fetchCurrentUser());
const App = () => (
  <Provider store={store}>
      <div className="App">
        <Main />
      </div>
  </Provider>
)




export default App;
