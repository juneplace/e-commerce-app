import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.png';
import styled from 'styled-components';


class Navbar extends Component {
    render() {
        return(
            <NavWrapper className="navbar navbar-expand-small navbar-dark px-sm-5 bg-primary">
                <Link to='/'>
                <img src={logo} alt='store' className='navbar-brand' />
                </Link>
            <ul className='navbar-nav align-items-center'>
            <li className='nav-item ml-5'>
                <Link to='/product-list' className='nav-link'>
                    Products
                </Link>
            </li>
            </ul>
            <Link to='/cart'>
                <ButtonContainer>
                <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-fill" viewBox="0 0 16 16">
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z"/>
</svg> </span> cart
                </ButtonContainer>
            </Link>

            </NavWrapper>
        );
    }
}

const NavWrapper = styled.nav`
background:black;
.nav-link{
    color:white;
}
`

const ButtonContainer = styled.button`
text-transform:capitalize;
font-size:1.4rem;
background:transparent;
border:0.05rem solid white
`;


export default Navbar;