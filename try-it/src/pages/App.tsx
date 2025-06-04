import { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RootLayout } from '@/components/layouts/Root.layout';

const IndexPage = lazy(() => import('@/pages/Index.page'));
const SRPPage = lazy(() => import('@/pages/SRP.page'));

export const App = () => (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<RootLayout />}>
                <Route index element={<IndexPage />} />
                <Route path="single-responsibility-principle" element={<SRPPage />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
