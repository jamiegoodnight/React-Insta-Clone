import React from 'react';
import styled from 'styled-components';

const SocialIcons = styled.div`

    ${SocialIcons} i {
        margin-top: 5px;
        margin-right: 5px;
        margin-left: 5px;
        font-size: 20px;
    }

`
const Likes = styled.div`
    margin-bottom: -10px;
    margin-left: 5px;
`

class Social extends React.Component {
    constructor(props){
        super(props);
        this.state={
            likes: this.props.element.likes,
            liked: false

        }
    }
    likeIt = e => {
        if (this.state.liked===false){
            e.target.classList.add('fas')
            let likes=this.state.likes + 1
            let liked=!this.state.liked
            this.setState({
                likes:likes,
                liked: liked
            })} else { 
                e.target.classList.remove('fas')
                let likes=this.state.likes - 1
                let liked=!this.state.liked
                this.setState({
                    likes: likes,
                    liked: liked
                })}
    }
    render(){
        return(
            <SocialIcons>
                <i className="far fa-heart" onClick={this.likeIt}></i>
                <i className="far fa-comment"></i>
                <Likes>
                    <p><strong>{this.state.likes}</strong> likes</p>
                </Likes>
            </SocialIcons>
        )
    }
}

export default Social;