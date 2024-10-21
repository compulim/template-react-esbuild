import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import AppProvider from './data/AppProvider';
import App from './ui/App';

const rootElement = document.getElementsByTagName('main')[0];

rootElement &&
  createRoot(rootElement).render(
    <StrictMode>
      <AppProvider>
        <App />
      </AppProvider>
    </StrictMode>
  );

IS_DEVELOPMENT && new EventSource('/esbuild').addEventListener('change', () => location.reload());
