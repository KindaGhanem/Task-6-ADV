

import React from 'react';
import { useSelector } from 'react-redux';

export default function MainTitle({ title }) {

  const {theme} = useSelector(state => state.blogs);

  return (
    <h2 className={`py-8 text-2xl font-semibold ${theme === 'dark' ? 'text-white' : 'text-myprimary'}`}>
      {title}
    </h2>
  );
}
