import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import '@/styles/main.css';
import { App } from '@/pages/App';

const root = createRoot(document.getElementById('root') as HTMLDivElement);
root.render(
    <StrictMode>
        <App />
    </StrictMode>,
);
