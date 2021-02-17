import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Heading from 'components/atoms/Heading/Heading';
import withContext from 'components/hoc/withContext';
import { connect } from 'react-redux';
import { addItem as addItemAction } from 'actions';

const StyledWrapper = styled.div`
  border-left: 10px solid ${({ theme, activeColor }) => theme[activeColor]};
  z-index: 999;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-items: space-between;
  right: 0;
  top: 0;
  height: 100vh;
  width: 680px;
  padding: 100px 70px;
  background-color: white;
  box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
  transform: translateX(${({ isVisible }) => (isVisible ? '0' : '100%')});
  transition: transform 0.25s ease-in-out;
`;

const StyledTextArea = styled.input`
  border-radius: 10px;
  margin: 30px 0 100px;
  height: 30vh;
  padding: 15px 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.light};
  background-color: ${({ theme }) => theme.grey100};
  border: none;

  ::placeholder {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: ${({ theme }) => theme.grey300};
  }
`;

const StyledInput = styled(Input)`
  margin-top: 30px;
`;
const NewItemBar = ({ pageContext, isVisible, addItem }) => (
  <StyledWrapper isVisible={isVisible} activeColor={pageContext}>
    <Heading big>Add a new item</Heading>
    <Paragraph>Enter your note below</Paragraph>
    <StyledInput placeholder={pageContext === 'twitters' ? 'Account Name' : 'Title'} />
    {pageContext === 'articles' && <StyledInput placeholder="link" />}
    <StyledTextArea as="textarea" placeholder={pageContext === 'notes' ? 'Note' : 'Description'} />
    <Button
      onClick={() =>
        addItem(pageContext, {
          title: 'Hello',
          content: 'akjdfbpowugb;aurgb',
        })
      }
      activeColor={pageContext}
    >
      Add Note
    </Button>
  </StyledWrapper>
);

const mapDispatchToProps = (dispatch) => ({
  addItem: (itemType, itemContent) => dispatch(addItemAction(itemType, itemContent)),
});

export default connect(null, mapDispatchToProps)(withContext(NewItemBar));
