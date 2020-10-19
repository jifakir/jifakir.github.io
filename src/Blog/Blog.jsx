import React from 'react';
import SectionWrap from '../SectionWrap/SectionWrap';
import './Blog.scss';
import BlogItem from './BlogItem/BlogItem';


export default () => {


    return (
        <div className="blog">
            <SectionWrap title='Blog' >
                <div className="blogs-wrapper">
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                    <BlogItem />
                </div>
            </SectionWrap>
        </div>
    )
}