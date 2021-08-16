import React, { useEffect, ReactElement } from 'react';
import { Link } from 'gatsby';
import { App } from '@/contexts/App';
import { NavBtn } from './NavBtn';
import { Search } from './Search';

interface Props {}
interface States {}

const DefaultProps: Props = {};

/**
 * ページのヘッダー
 * @param { Props } _props
 * @returns { ReactElement }
 */
export const Header: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>>, ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), _props, };

    return (
        <App.Consumer>
            { ( { taxonomy, }, ) => (
                <header id={ `${ taxonomy }-header` } className={ `flex flex-direction-row transparent dark--text pt-4 pb-4 pr-4 pl-4 header w-100` }>
                    {/* Navigation btn */}
                        <NavBtn />
                    {/* -------------- */}
                    {/* h1 */}
                        <Link to={ `/` } className={ `mr-auto white--text` }>
                            <h1>Y.H.</h1>
                        </Link>
                    {/* -- */}
                    {/* Search box */}
                        <Search />
                    {/* ---------- */}
                </header>
            ) }
        </App.Consumer>
    );

};
