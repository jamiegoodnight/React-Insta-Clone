import React from 'react';

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
            <div className="social-icons">
                <i className="far fa-heart" onClick={this.likeIt}></i>
                <i className="far fa-comment"></i>
                <div className="likes">
                    <p><strong>{this.state.likes}</strong> likes</p>
                </div>
            </div>
        )
    }
}

export default Social;