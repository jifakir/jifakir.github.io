import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';




const ReactHelmet = ({title}) => {


    return (
        <Fragment>
            <Helmet>
                <title> JI Fakir | {title}</title>
                <meta name="description" content="Nested component" />
            </Helmet>
        </Fragment>
    )
};

export default ReactHelmet;