import React, { ReactElement } from 'react';
import { App } from '@/contexts/App';

interface Props {}

const DefaultProps: Props = {};

export const NavBtn: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>>, ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), ..._props, };

    return (
        <App.Consumer>
            { ( { navigation, } ) => (
                <button onClick={ navigation.toggle } className={ `navBtn` }>
                    <span className={ `navBtn-bar` }></span>
                    <span className={ `navBtn-bar` }></span>
                </button>
            ) }
        </App.Consumer>
    );

};
