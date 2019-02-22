import React from 'react';
import './PostContainer.css'
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import Social from './Social';


const PostContainerWrapper = styled.div`
    width: 500px;
    margin-top: 40px;
    background: white;
`
const PostWrapper = styled.div`
    margin-top: 20px;
    margin-bottom: 20px;
    border: 1px solid lightgray;
`
const PostHeader = styled.div`
    display: flex;

    ${PostHeader} p {
        margin-top: 15px;
        margin-left: 5px;
    }
`
const User = styled.img`
    width: 30px;
    height: 30px;
    margin: 10px;
    border-radius: 20px;
`

const PostImage = styled.img`
    width: 499px;
    height: 500px;
`

const PostContainer = props => {
    console.log(props);
    return (
        <PostContainerWrapper>
            {props.dummy.map(element => (
                <PostWrapper key={element.timestamp}>
                    <PostHeader>
                        <User src={element.thumbnailUrl}/>
                        <p><strong>{element.username}</strong></p>
                    </PostHeader>
                        <PostImage src={element.imageUrl}/>
                    <Social 
                    element={element}
                    />
                    <CommentSection 
                    element={element}
                    /> 
                </PostWrapper>
            ))}
        </PostContainerWrapper>
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