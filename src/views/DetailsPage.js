import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';
import { routes } from 'routes';
import PropTypes from 'prop-types';

class DetailsPage extends React.Component {
  state = {
    sidebarType: 'notes',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.twitter:
        this.setState({ sidebarType: 'twitters' });
        break;
      case routes.notes:
        this.setState({ sidebarType: 'notes' });
        break;
      case routes.article:
        this.setState({ sidebarType: 'articles' });
        break;
      default: {
        console.log('alien site');
      }
    }
  }

  render() {
    const data = {
      id: 1,
      title: 'Test Note',
      created: '2 days ago',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
      articleUrl: 'https://youtube.com/helloroman',
      twitterUrl: 'https://pbs.twimg.com/profile_images/1173367116562685954/k-MYyrws_400x400.jpg',
    };
    const { match } = this.props;
    const { sidebarType } = this.state;
    return (
      <DetailsTemplate
        sidebarType={sidebarType}
        id={data.id}
        title={data.title}
        created={data.created}
        content={data.content}
        articleUrl={data.articleUrl}
        twitterUrl={data.twitterUrl}
      >
        <p>{sidebarType}</p>
        <p>{`is notes: ${match.path === routes.note}`}</p>
        <p>{`is twitter: ${match.path === routes.twitter}`}</p>
        <p>{`is articles: ${match.path === routes.article}`}</p>
      </DetailsTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.string.isRequired,
};

export default DetailsPage;
