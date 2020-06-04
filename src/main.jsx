import React from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import configureStore from './state/store';
import Views from './views';


const reduxStore = configureStore(window.REDUX_INITIAL_STATE); // for SSR

function Main() {
  return (
    <ReduxProvider store = {reduxStore}>
        <Views/>
    </ReduxProvider>
  );
}

export default Main;
