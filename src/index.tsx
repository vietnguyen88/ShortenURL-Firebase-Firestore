import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const Test = () => {
  return <div>abc</div>;
};
const root = createRoot(document.getElementById('app'));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
