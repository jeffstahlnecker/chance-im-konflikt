import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { setRem } from './Styles';

const Header = () => {
  return (
    <header>
      <Grid>
        <Logo>This is the Logo</Logo>
        <Navbar>
          <NavItem>
            <Link to='/'>Home</Link>
          </NavItem>
          <NavItem>
            <Link to='/'>About</Link>
          </NavItem>
          <NavItem>
            <Link to='/'>Mediators</Link>
          </NavItem>
        </Navbar>
      </Grid>
    </header>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 2fr 6fr;
`;

const Logo = styled.div``;

const Navbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-content: center;
  position: fixed;
`;

const NavItem = styled.div`
  padding: ${setRem(5)} ${setRem(10)};
`;

export default Header;
