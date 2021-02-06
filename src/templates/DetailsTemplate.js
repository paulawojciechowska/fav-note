import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Heading from 'components/atoms/Heading/Heading';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Button from 'components/atoms/Button/Button';
import UserPageTemplate from './UserPageTemplate';

const StyledWrapper = styled.div`
  padding: 25px 150px 25px 70px;
  max-width: 50vw;
  min-width: 50vh;
  position: relative;
  display: flex;
  flex-direction: column;
  @media (max-width: 1200px) {
    max-width: 80vw;
  }
`;

const HeadingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledHeaderWrapper = styled.div`
  margin: 0;
`;

const DateInfo = styled(Paragraph)`
  margin: 0 0 15px;
  color: ${({ theme }) => theme.grey300};
  font-weight: ${({ theme }) => theme.bold};
  font-size: ${({ theme }) => theme.fontSize.s};
`;

const StyledParagraph = styled(Paragraph)`
  margin-bottom: 40px;
`;

const StyledImage = styled.img`
  height: 90px;
  width: 90px;
  display: block;
  border-radius: 50%;
  border: solid 4px ${({ theme }) => theme.twitters};
`;

const StyledLink = styled.a`
  margin: 0 0 40px;
  text-decoration: none;
  color: ${({ theme }) => theme.black};
  font-weight: ${({ theme }) => theme.bold};
`;

const DetailsTemplate = ({ sidebarType, title, created, content, twitterUrl, articleUrl }) => (
  <UserPageTemplate sidebarType={sidebarType}>
    <StyledWrapper>
      <HeadingWrapper>
        <StyledHeaderWrapper>
          <Heading big as="h1">
            {title}
          </Heading>
          <DateInfo>CREATED {created}</DateInfo>
        </StyledHeaderWrapper>
        {sidebarType === 'twitters' && <StyledImage src={twitterUrl} />}
      </HeadingWrapper>
      <StyledParagraph>{content}</StyledParagraph>
      {sidebarType === 'articles' && <StyledLink href={articleUrl}>{articleUrl}</StyledLink>}
      <StyledLink href={`/${sidebarType}`}>
        <Button activeColor={sidebarType}>save / close</Button>
      </StyledLink>
    </StyledWrapper>
  </UserPageTemplate>
);

DetailsTemplate.propTypes = {
  sidebarType: PropTypes.oneOf(['notes', 'twitters', 'articles']).isRequired,
  title: PropTypes.string,
  created: PropTypes.string,
  content: PropTypes.string,
  articleUrl: PropTypes.string,
  twitterUrl: PropTypes.string,
};

DetailsTemplate.defaultProps = {
  title: '',
  created: '',
  content: '',
  articleUrl: '',
  twitterUrl: '',
};

export default DetailsTemplate;
