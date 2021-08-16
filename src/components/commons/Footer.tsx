import React, { ReactElement } from 'react';
import { App } from '@/contexts/App';

interface Props {}
interface States {}

const DefaultProps: Props = {};

/**
 * ページのフッター
 * @param { Props } _props
 * @returns { ReactElement }
 */
export const Footer: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>>, ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), _props, };

    return (
        <App.Consumer>
            { ( { taxonomy, }, ) => (
                <footer id={ `${ taxonomy }-footer` }></footer>
            ) }
        </App.Consumer>
    );

};
