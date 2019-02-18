import React from 'react';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments: this.props.element.comments
        }
    }
    render(){
        return(
            <div className="comments">
                {this.state.comments.map(x => (
                    <div>
                        <p><strong>{x.username}</strong></p> 
                        <p>{x.text}</p>  
                    </div>
                ))}
            </div>
        )
    }
}

export default CommentSection;