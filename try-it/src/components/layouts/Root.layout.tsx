import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { SpinnerIcon } from '@/components/atoms/SpinnerIcon.atom';
import { Header } from '@/components/layouts/Header.layout';

export const RootLayout = () => (
    <Fragment>
        <Header />
        <main>
            <Suspense fallback={<SpinnerIcon />}>
                <Outlet />
            </Suspense>
        </main>
    </Fragment>
);
