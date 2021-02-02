import React from 'react';
import Card from './Card';

export default {
  title: 'Card',
  component: Card,
};

export const Card1 = () => <Card />;
export const Card2 = () => <Card cardType="twitter" />;
export const Card3 = () => <Card cardType="article" />;
