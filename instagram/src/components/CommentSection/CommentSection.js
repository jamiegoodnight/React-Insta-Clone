import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Comment = styled.div`
    display: flex;
    margin-bottom: -10px;
    margin-left: 5px;
    line-height: 1.4;
`
const Text = styled.p`
    margin-left: 5px;
`

const Reply = styled.form`
    display: flex;
    justify-content: space-between;
    margin-right: 5px;

    ${Reply} p {
        margin-top: 0;
        margin-bottom: 5px;
        font-size: 30px;
    }
    `
const CommentInput = styled.input`
    background: white;
    margin-bottom: 5px;
    margin-left: 5px;
    border: 0px solid;
`


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
            <>
                {this.state.comments.map(x => (
                    <Comment>
                        <p><strong>{x.username}</strong></p> <Text> {x.text}</Text>  
                    </Comment>
                ))}
                <Reply onSubmit={this.addComment}> 
                    <CommentInput type="text" placeholder="Add a comment..." value={this.state.text} name="text" onChange={this.handleChanges} />
                    <p><strong>...</strong></p>
                </Reply>
            </>
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