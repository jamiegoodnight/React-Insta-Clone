import React from 'react';

import PropTypes from 'prop-types';
import './CommentSection.css';

class CommentSection extends React.Component {
    constructor(props){
        super(props);
        this.state={
            comments: this.props.element.comments,
            text: ""
        }
    }

    handleChanges = e => {
        this.setState({
          [e.target.name]: e.target.value
        })
      }
    
      addComment = e => { 
        e.preventDefault();
        const newComment = {
          username: "jamieGIII",
          text: this.state.text,
        }
        this.setState({
          comments: [...this.state.comments, newComment],
          text: "",
        })
      }

    render(){
        return(
            <div className="comments-wrapper">
                {this.state.comments.map(x => (
                    <div className="comment">
                        <p><strong>{x.username}</strong></p> <p className="text"> {x.text}</p>  
                    </div>
                ))}
                <form className="reply" onSubmit={this.addComment}> 
                    <input type="text" placeholder="Add a comment..." value={this.state.text} name="text" onChange={this.handleChanges} />
                    <p><strong>...</strong></p>
                </form>
            </div>
        )
    }
}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(PropTypes.shape({
       username: PropTypes.string,
       text: PropTypes.string,
    }))
}

export default CommentSection;