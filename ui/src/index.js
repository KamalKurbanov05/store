import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import setypeStore from './store/index';
import App from './App';
import * as React from 'react';


const store = setypeStore();
const container = document.getElementById('root');

const root = createRoot(container);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);