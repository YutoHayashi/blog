import * as React from "react"
import { Seo } from '@/middleware/Seo';

const NotFoundPage: React.FunctionComponent<{  }> = (  ) => {
    return (
        <>
            <Seo title={ `404` }/>
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </>
    );
};

export default NotFoundPage;
