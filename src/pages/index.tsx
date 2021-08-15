import React, { useState } from 'react';
import { Default } from '@/layouts/Default';
import { Seo } from "@/middleware/Seo";

const Index: React.FunctionComponent<{  }> = (  ) => {
    return (
        <>
            <Seo title={ `Home` } />
            <Default>
                { {
                    content: (
                        <></>
                    )
                } }
            </Default>
        </>
    );
}

export default Index;
