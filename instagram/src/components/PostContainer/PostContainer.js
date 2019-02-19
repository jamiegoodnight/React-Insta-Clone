import React from 'react';

import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import './PostContainer.css'


const PostContainer = props => {
    console.log(props);
    return (
        <div className='post-container-wrapper'>
            {props.dummy.map(element => (
                <div key={element.timestamp} className="post-wrapper">
                    <div className="post-header">
                        <img className="user" src={element.thumbnailUrl}/>
                        <p><strong>{element.username}</strong></p>
                    </div>
                        <img className="post-image" src={element.imageUrl}/>
                    <div className="social-icons">
                        <i className="far fa-heart"></i>
                        <i className="far fa-comment"></i>
                    <div>
                    </div>
                    </div>
                    <CommentSection 
                    element={element}
                    /> 
                </div>
            ))}
        </div>
    )
}

PostContainer.propTypes = {
    dummy: PropTypes.arrayOf(PropTypes.shape({
        timestamp: PropTypes.string,
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        imageUrl: PropTypes.string,
    }))
}

export default PostContainer;