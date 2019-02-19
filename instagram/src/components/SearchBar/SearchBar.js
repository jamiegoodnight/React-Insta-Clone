import React from 'react';
import instaLogo from '../../assets/instaLogo.png';
import camLogo from '../../assets/camLogo.svg'
import './SearchBar.css'


const SearchBar = props => {
    return (
        <div className="search-bar-wrapper">
            <div>
                <img className="cam-logo" src={camLogo} />
                <img className="insta-logo" src={instaLogo}  />
            </div>
            <div>
                <input type="search" placeholder="search" onKeyDown={props.postSearch}></input>
            </div>
            <div>
            <i className="far fa-compass"></i>
            <i className="far fa-heart"></i>
            <i className="far fa-user"></i>
            </div>
        </div>
    );
}




export default SearchBar;