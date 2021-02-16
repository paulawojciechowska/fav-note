import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridTemplate from 'templates/GridTemplate';
import Card from 'components/molecules/Card/Card';

const Twitter = ({ twitters }) => (
  <GridTemplate>
    {twitters.map(({ id, title, content, created }) => (
      <Card id={id} title={title} content={content} created={created} key={id} />
    ))}
  </GridTemplate>
);

Twitter.propTypes = {
  twitters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      cardType: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
      created: PropTypes.string.isRequired,
    }),
  ),
};

Twitter.defaultProps = {
  twitters: [],
};

const mapStateToProps = ({ twitters }) => ({ twitters });

export default connect(mapStateToProps)(Twitter);
