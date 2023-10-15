import React from 'react';
import { useSelector } from 'react-redux';
import { selectorAppState } from 'store/appStore/selectors';

const Loader = () => {
  const { isLoading } = useSelector(selectorAppState);
  return isLoading && <div>Loading...</div>;
};

export default Loader;
