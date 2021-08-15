import { ReactNode, createContext } from 'react';

export type AppContext = {
    taxonomy: string;
    theme: 'light' | 'dark';
    navigation: { toggle?: (  ) => void; current?: boolean; };
    alert: { set?: ( message: ReactNode ) => void; message?: ReactNode; type?: 'info' | 'warning' | 'danger' | 'normal' };
}

export const DefaultApp: AppContext = {
    taxonomy: 'app',
    theme: 'light',
    navigation: { toggle: (  ) => null, current: false, },
    alert: { set: ( message ) => null, message: '', type: 'normal' },
};

export const App = createContext<AppContext>( DefaultApp );
