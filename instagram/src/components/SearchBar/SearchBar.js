import React from 'react';
import instaLogo from '../../assets/instaLogo.png';
import camLogo from '../../assets/camLogo.svg'
import './SearchBar.css'

const SearchBar = props => {
    return (
        <div className="search-bar">
            <div>
                <img className="cam-logo" src={camLogo} />
                <img className="insta-logo" src={instaLogo}  />
            </div>
            <div>
                <input type="search" placeholder="search"></input>
            </div>
            <div>
            <i class="far fa-compass"></i>
            <i class="far fa-heart"></i>
            <i class="far fa-user"></i>
            </div>
        </div>
    );
}




export default SearchBar;