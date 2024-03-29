import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Input from 'components/atoms/Input/Input';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import PlusIcon from 'assets/icons/plus.svg';
import NewItemBar from 'components/organisms/NewItemBar/NewItemBar';
import withContext from 'components/hoc/withContext';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  position: relative;
  padding: 25px 150px 25px 70px;
`;

const StyledGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 58px;
  @media (max-width: 1200px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 58px;
  }
`;
const StyledPageHeader = styled.div`
  margin: 25px 0 50px 0;
`;

const StyledHeading = styled(Heading)`
  margin: 25px 0 0 0;

  ::first-letter {
    text-transform: uppercase;
  }
`;

const StyledParagraph = styled(Paragraph)`
  margin: 0;
  font-weight: ${({ theme }) => theme.bold};
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: fixed;
  bottom: 40px;
  right: 40px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
  background-size: 35%;
  border-radius: 50px;
  z-index: 1000;
`;

class GridTemplate extends Component {
  state = {
    isNewItemBarVisible: false,
  };

  handleNewItemBarToggle = () =>
    this.setState((prevState) => ({
      isNewItemBarVisible: !prevState.isNewItemBarVisible,
    }));

  render() {
    const { children, sidebarType, pageContext } = this.props;
    const { isNewItemBarVisible } = this.state;
    return (
      <>
        <UserPageTemplate>
          <StyledWrapper>
            <StyledPageHeader>
              <Input search placeholder="Search" />
              <StyledHeading big as="h1">
                {pageContext}
              </StyledHeading>
              <StyledParagraph>6 {pageContext}</StyledParagraph>
            </StyledPageHeader>
            <StyledGrid>{children}</StyledGrid>
            <StyledButtonIcon
              onClick={this.handleNewItemBarToggle}
              icon={PlusIcon}
              activeColor={pageContext}
            />
            <NewItemBar handleClose={this.handleNewItemBarToggle} isVisible={isNewItemBarVisible} />
          </StyledWrapper>
        </UserPageTemplate>
      </>
    );
  }
}

GridTemplate.propTypes = {
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageContext: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

GridTemplate.defaultProps = {
  pageContext: 'notes',
};

export default withContext(GridTemplate);
