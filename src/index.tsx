import { createRoot } from 'react-dom/client';
import React from 'react';

import App from './ui/App';

const rootElement = document.getElementById('root');

rootElement && createRoot(rootElement).render(<App />);
