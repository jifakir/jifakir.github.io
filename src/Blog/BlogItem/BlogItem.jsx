import React from 'react';

import './BlogItem.scss';


export default () => {

    return (
        <div className="blog-item">
            <div className="item-container">
                <div className="thumbnail-wrapper">
                    <img src="http://chester.nuclearthemes.com/images/blog-image-2.jpg" alt="Installing Nodejs"/>
                    <div className="date-wrapper">
                        <h1 className="day">28</h1>
                        <h3 className="month">Jan</h3>
                    </div>
                </div>
                <h1 className="title">
                    Markdown and HTML supported blog.
                </h1>
            </div>
        </div>
    )
}