import React from 'react';
import instaLogo from '../../assets/instaLogo.png';
import camLogo from '../../assets/camLogo.svg';
import styled from 'styled-components';


const SearchBarWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    position: fixed;
    /* box-shadow: 0 4px 2px -2px #ededed; */
    background:rgba(255,255,255, 0.9);
    border-bottom: 1px solid lightgray;
    padding-top: 10px;
    `
const CamLogo = styled.img`
    height: 30px;
    margin-right: 10px;
    padding-bottom: 2px;
    `
const InstaLogo = styled.img`
    height: 30px;
    border-left: 1px solid black;
    padding-top: 5px;
    padding-left: 10px;
    `
const SearchInputs = styled.input`
    margin-bottom: 10px;
    border: 0px solid;
    outline: none;

    ${SearchInputs}:focus { 
        box-shadow: 0px 0px 10px lightgray;
    }

    ${SearchInputs}::placeholder {
        text-align: center;
    }
    `
const SearchIcons = styled.i`
    margin-top: 10px;
    margin-left: 20px;
    font-size: 20px;
    `

const SearchBar = props => {
    return (
        <SearchBarWrapper>
            <div>
                <CamLogo src={camLogo} />
                <InstaLogo src={instaLogo}  />
            </div>
            <div>
                <SearchInputs type="search" placeholder="search" onKeyDown={props.postSearch}/>
            </div>
            <div>
            <SearchIcons className="far fa-compass"></SearchIcons>
            <SearchIcons className="far fa-heart"></SearchIcons>
            <SearchIcons className="far fa-user"></SearchIcons>
            </div>
        </SearchBarWrapper>
    );
}




export default SearchBar;