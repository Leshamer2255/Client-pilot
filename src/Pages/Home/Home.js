import React from 'react';
import ReadyBlock from '../../Components/ReadyBlock';
import WhatWeOffer from '../../Components/WhatWeOffer';
import LovedBlock from '../../Components/LovedBlock';

const Home = () => {
  return (
    <div>
    <div>
      <h2>Welcome to the Home Page!</h2>
      <p>This is the Home Page content.</p>
    </div>
    <LovedBlock />
    <WhatWeOffer />
    <ReadyBlock />
    </div>
  );
};

export default Home;
