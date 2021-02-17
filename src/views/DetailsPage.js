import React from 'react';
import DetailsTemplate from 'templates/DetailsTemplate';

const data = {
  id: 1,
  title: 'Test Note',
  created: '2 days ago',
  content:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi',
  articleUrl: 'https://youtube.com/helloroman',
  twitterUrl: 'https://pbs.twimg.com/profile_images/1173367116562685954/k-MYyrws_400x400.jpg',
};

const DetailsPage = () => (
  <DetailsTemplate
    id={data.id}
    title={data.title}
    created={data.created}
    content={data.content}
    articleUrl={data.articleUrl}
    twitterUrl={data.twitterUrl}
  />
);

export default DetailsPage;
