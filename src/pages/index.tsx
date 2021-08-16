import React, { useState } from 'react';
import { Default } from '@/layouts/Default';
import { Seo } from "@/middleware/Seo";
import { Mv } from '@/components/animation/Mv';

const Index: React.FunctionComponent<{  }> = (  ) => {
    return (
        <>
            <Seo title={ `Home` } />
            <Default>
                { {
                    content: (
                        <>
                            <Mv color={ `#29B3F0` } />
                        </>
                    )
                } }
            </Default>
        </>
    );
}

export default Index;
