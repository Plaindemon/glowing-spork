import styled from 'styled-components'
import { NavLink as Link } from 'react-router-dom'
import {FaBars} from 'react-icons/fa'

export const Nav = styled.nav`
background: none;
height: 80px;
display: flex;
justify-content: space-between;
padding: 0.5rem calc(( 100vw - 1000px) /2);
z-index: 10;
`
export const NavLink = styled(Link) `
color: #27405D;
font-weight: bolder;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;

&.active {
    color: #15cdfc;
}
`

export const Bars = styled(FaBars)`
display: none;
color: #27405D;

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}

@media screen and (max-width: 768px){
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-200%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
}


`

export const NavBtn =styled(Link) `
display: flex;
align-items: center;
margin-right: 24px;
`
export const NavMenu = styled.div `
display: flex;
align-items: center;
margin-right: 24px;



@media screen and (max-width: 768px) {
    display: none;
}
`
