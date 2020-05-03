import React, { Fragment, useEffect } from 'react';
import HeadSection from './HeadSection';
import FeatureSection from './FeatureSection';

const Home = ({ selectHome }: { selectHome: () => void }) => {
  useEffect(() => {
    selectHome();
  }, [selectHome]);

  return (
    <Fragment>
      <HeadSection />
      <FeatureSection />
    </Fragment>
  );
};

export default Home;
