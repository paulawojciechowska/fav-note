import React from 'react';
import Input from './Input';

export default {
  title: 'Input',
  component: Input,
};

export const testInput = () => <Input placeholder="type" />;
export const searchInput = () => <Input placeholder="search" search />;
