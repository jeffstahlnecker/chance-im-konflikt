import React, { useState } from 'react';
import Image from 'gatsby-image';
import styled from 'styled-components';
import { Link, graphql, useStaticQuery } from 'gatsby';
import {setColor, media, setFont, setTransition } from './Styles';
import { FaBars } from 'react-icons/fa';
import styles from './Header.module.css';
import links from './Constants/Links';


const Header = () => {
  const [isOpen, setNav] = useState(false);
  const toggleNav = () => {
    setNav((isOpen) => !isOpen);
  };
  const logo = useStaticQuery(getLogo);
  return (
    <header>
      <Grid>
        <Logo>
          <Image fixed={logo.file.childImageSharp.fixed}/>
        </Logo>
        <MobileMenu type='button' onClick={toggleNav}>
          <FaBars />
        </MobileMenu>
        <StyledMenu className={isOpen ? `${styles.show}` : `${styles.hide}`}>
          {links.map((item, index) => {
            return (
              <MenuItem key={index}>
                <Link to={item.path}>{item.text}</Link>
              </MenuItem>
            );
          })}
        </StyledMenu>
      </Grid>
    </header>
  );
};

const getLogo = graphql`
  query {
    file(relativePath: {eq: "logo.png"}) {
      childImageSharp {
        fixed (width:175){
          ...GatsbyImageSharpFixed_withWebp_tracedSVG
        }
      }
    }
  }
`;

const Grid = styled.div`
  display: grid;
  color: ${setColor.mainBlack};
  background-color: ${setColor.mainWhite};
  padding: 1vh 1vw;
  ${media.tablet`  display: grid;
  grid-template-columns: 4fr 2fr;
  
  `}
`;

const Logo = styled.span`
  display: flex;
  ${setFont.logo};
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  padding: 0;
  margin: 0;
  flex-wrap: no-wrap;
`;

const MobileMenu = styled.button`
  color: ${setColor.mainBlack};
  background-color: transparent;
  margin-top: 1rem;
  border: none;
  outline: none;
  font-size: 1.5rem;
  order: 99;
  cursor: pointer;
  align-self: first baseline;
  position: fixed;
  ${media.tablet`display:none;`};
`;

const StyledMenu = styled.ul`
  display: flex;
  list-style: none;
  margin: 3rem 0 0 0;
  align-items: center;
  padding: 0;
  justify-content: flex-start;
  flex: 4;
  font-weight: 500;
  flex-direction: column;
  height: 0;
  overflow: hidden;
  transition: all 0.3s linear;
  ${media.tablet`
	flex-direction:row;
	height: auto;
	margin: 0 0 0 0;
	`};
`;

const MenuItem = styled.li`
  padding: 1rem 2rem;
  
  a {
    text-decoration: none;
    color: ${setColor.mainBlack};
  }
  a:hover {
    color: ${setColor.secondaryColor};
    ${setTransition()}
  }
`;

export default Header;
