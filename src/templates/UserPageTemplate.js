import React from 'react';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const UserPageTemplate = ({ children, sidebarType }) => (
  <>
    <Sidebar sidebarType={sidebarType} />
    {children}
  </>
);
UserPageTemplate.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element.isRequired, PropTypes.node]).isRequired,
  sidebarType: PropTypes.oneOf(['notes', 'twitters', 'articles']),
};

UserPageTemplate.defaultProps = {
  sidebarType: 'notes',
};

export default UserPageTemplate;
