import React, { ReactElement } from 'react';

interface Props {
    icon: string;
}

const DefaultProps: Props = {
    icon: '',
};

export const Mdi: React.FunctionComponent<Partial<Props>> = ( _props: React.PropsWithChildren<Partial<Props>> ): ReactElement => {

    const props: React.PropsWithChildren<Props> = { ...Object.assign( DefaultProps ), ..._props, };

    return (
        <i className={ `mdi mdi-${ props.icon }` }></i>
    );

};
