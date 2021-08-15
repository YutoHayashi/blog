import React, { ReactElement } from 'react';
import { Mdi } from '../utils/Mdi';

interface Props {}

const DefaultProps: Props = {  };

export const Search: React.FunctionComponent<Props> = ( _props: React.PropsWithChildren<Props> ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), ..._props, };

    return (
        <button><span className={ `size-18` }><Mdi icon={ `magnify` }/></span></button>
    );

};
