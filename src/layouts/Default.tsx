import React, { ReactNode, useEffect, ReactElement, useState, } from 'react';
import '@/scss/index.scss';
import { App, AppContext, DefaultApp } from '@/contexts/App';
import { Header } from '@/components/commons/Header';
import { Footer } from '@/components/commons/Footer';

interface Props {
    children: {
        content?: ReactNode;
    };
}

const DefaultProps: Props = {
    children: {},
};

/**
 * Defaultコンポーネントのstateプロパティ
 * @type { AppContext }
 */
let _app: AppContext;

/**
 * Defaultコンポーネントのstateの更新リクエスト
 * @type { React.Dispatch<React.SetStateAction<AppContext>> }
 */
let _setApp: React.Dispatch<React.SetStateAction<AppContext>> = _ => null;

/**
 * Defaultコンポーネントのstateの更新リクエストを型安全にする
 * @param { Partial<AppContext> } context
 * @returns { void }
 */
const setApp = ( context: Partial<AppContext>, ): void => _setApp( { ..._app, ...context, }, );

/**
 * ページの基本構成コンポーネント
 * @param { React.PropsWithChildren<Partial<Props>> } _props
 * @returns { ReactElement }
 */
export const Default: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>> ): ReactElement => {

    [ _app, _setApp, ] = useState<AppContext>( {
        ...DefaultApp,
        ...{
            taxonomy: `${ process.env.GATSBY_APP_TAXONOMY }`,
        },
    }, );

    useEffect( (  ) => {
        setApp( {
            navigation: {
                toggle: (  ) => setApp( { navigation: { current: !_app.navigation.current }, }, ),
            },
            alert: {
                set: ( message ) => setApp( { alert: { message, }, }, ),
            },
        }, );
    }, [  ], );

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps, ), ..._props, };

    return (
        <App.Provider value={ _app }>
            <Header></Header>
            <main>
                { props.children.content }
            </main>
            <Footer></Footer>
        </App.Provider>
    );

};
