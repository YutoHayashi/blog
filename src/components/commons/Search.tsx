import React, { ReactElement } from 'react';
import { Mdi } from '../utils/Mdi';

interface Props {}

const DefaultProps: Props = {  };

export const Search: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>> ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), ..._props, };

    return (
        <button><span className={ `size-18 white--text` }><Mdi icon={ `magnify` }/></span></button>
    );

};
