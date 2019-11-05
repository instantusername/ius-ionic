import React from 'react';
import logo from '../assets/ius-logo.svg';
import { StyledHeader, StyledBrand, StyledLogo, StyledInput } from '../styles/Header';

const Header: React.FC = () => {
  return (
    <StyledHeader>
      <StyledBrand>
        <StyledLogo alt="Instant Username Search" src={logo} />
        <h1>Instant Username Search</h1>
      </StyledBrand>
      <StyledInput placeholder="Search username"></StyledInput>
    </StyledHeader>
  );
};

export default Header;
