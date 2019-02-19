import React from 'react';
import { hot } from 'react-hot-loader';
import setupApp from '../setup/setupApp';
import setupPlugins from '../setup/setupPlugins';
import Hello from './Hello';

setupApp();
setupPlugins();

const container = document.getElementById('app');
const bootstrap = JSON.parse(container.getAttribute('data-bootstrap'));

const App = () => (
    <Hello user={bootstrap.user}/>
);

export default hot(module)(App);
