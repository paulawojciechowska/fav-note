import React from 'react';
import PageContext from 'context';

/* eslint-disable arrow-body-style */
const withContext = (Component) => {
  return function contextComponent(props) {
    return (
      <PageContext.Consumer>
        {(context) => <Component {...props} pageContext={context} />}
      </PageContext.Consumer>
    );
  };
};
/* eslint-enable */

export default withContext;
