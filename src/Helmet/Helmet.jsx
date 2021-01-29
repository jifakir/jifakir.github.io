import React, { Fragment } from 'react';
import {Helmet} from 'react-helmet';




const ReactHelmet = ({title}) => {


    return (
        <Fragment>
            <Helmet>
                <title>{title} | JI Fakir is react developer.</title>
                <meta name="description" content="Nested component" />
            </Helmet>
        </Fragment>
    )
};

export default ReactHelmet;