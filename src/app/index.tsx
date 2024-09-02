import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from './ui/App';

const rootElement = document.getElementsByTagName('main')[0];

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );

IS_DEVELOPMENT && new EventSource('/esbuild').addEventListener('change', () => location.reload());
