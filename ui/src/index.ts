import { createRoot } from 'react-dom/client';
import HelloWorld from './HelloWorld';
import * as React from 'react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(React.createElement(HelloWorld, {title: "React"}));