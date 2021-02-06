import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import bulbIcon from 'assets/icons/bulb.svg';
import logoutIcon from 'assets/icons/logout.svg';
import penIcon from 'assets/icons/pen.svg';
import twitterIcon from 'assets/icons/twitter.svg';
import Logo from 'assets/icons/logo.svg';

const StyledWrapper = styled.nav`
  position: fixed;
  left: 0;
  top: 0;
  padding: 25px 0;
  width: 153px;
  height: 100vh;
  background-color: ${({ activeColor, theme }) => (activeColor ? theme[activeColor] : theme.notes)};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const StyledLogo = styled(NavLink)`
  display: block;
  width: 100px;
  height: 100px;
  background-image: url(${Logo});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-size: 80%;
  border: none;
  margin-bottom: 10vh;
`;

const IconsWrapper = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledLogOutButton = styled(ButtonIcon)`
  margin-top: auto;
`;

const Sidebar = ({ sidebarType }) => (
  <StyledWrapper activeColor={sidebarType}>
    <StyledLogo to="/" />
    <IconsWrapper>
      <li>
        <ButtonIcon as={NavLink} to="/notes" icon={penIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/twitters" icon={twitterIcon} activeclass="active" />
      </li>
      <li>
        <ButtonIcon as={NavLink} to="/articles" icon={bulbIcon} activeclass="active" />
      </li>
    </IconsWrapper>
    <StyledLogOutButton as={NavLink} to="/login" icon={logoutIcon} />
  </StyledWrapper>
);
Sidebar.propTypes = {
  sidebarType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

Sidebar.defaultProps = {
  sidebarType: 'notes',
};
export default Sidebar;
