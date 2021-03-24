import React from 'react';
import './Reviews.scss';



export default ({item}) => {
    const { testimonial, clientname, organization, designation} = item;

    return(
        <div className="reviews">
            <div className="reviews-wrapper">
                <div className="test-monial-wrapper">
                    <p className="testmonial">
                        {testimonial}
                    </p>
                    <div className="indicator">

                    </div>
                </div>
                <div className="client-identity">
                    <h1 className="name">
                        {clientname}
                    </h1>
                    <h3 className="designation">
                        {designation}, {organization}
                    </h3>
                </div>
            </div>
        </div>
    )
}