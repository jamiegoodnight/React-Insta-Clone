import React from 'react';
import CommentSection from '../CommentSection/CommentSection';


const PostContainer = props => {
    console.log(props);
    return (
        <div>
            {props.dummy.map(element => (
                <div key={element.timestamp}>
                    <img src={element.thumbnailUrl}/>
                    <p><strong>{element.username}</strong></p>
                    <img src={element.imageUrl}/>
                    <CommentSection 
                    element={element}
                    /> 
                </div>
            ))}
        </div>
    )
}


export default PostContainer;