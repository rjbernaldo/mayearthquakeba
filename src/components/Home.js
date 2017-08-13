import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GHeading from 'grommet/components/Heading';
// import GParagraph from 'grommet/components/Paragraph';
import GSection from 'grommet/components/Section';
import GFooter from 'grommet/components/Footer';
import GLabel from 'grommet/components/Label';
import GTiles from 'grommet/components/Tiles';
import GTile from 'grommet/components/Tile';
// import GCard from 'grommet/components/Card';
import GAnchor from 'grommet/components/Anchor';

import GDown from 'grommet/components/icons/base/Down';
import GSocialFacebook from 'grommet/components/icons/base/SocialFacebook';
import GSocialTwitter from 'grommet/components/icons/base/SocialTwitter';

const Home = () => (
  <GBox flex="grow">
    <GBox pad="medium" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
      <GSection appCentered={true} justify="center" align="center" full={true}>
        <GHeading strong={true} tag="h2" style={{ paddingTop: '12px' }}>WALA</GHeading>
        <p>
          Last earthquake was 1 day ago.
        </p>
        <GFooter justify="center" align="center">
          <GBox align="center">
            <GLabel size="small">
              scroll down to view details
            </GLabel>
            <GDown />
          </GBox>
        </GFooter>
      </GSection>
      <GTiles fill={true}>
        <GTile>
          <GBox
            pad="medium"
            colorIndex="light-2"
            margin="medium"
          >
            <GHeading>Sample</GHeading>
            <p>Sample description provided</p>
          </GBox>
        </GTile>
        <GTile>
          <GBox
            pad="medium"
            colorIndex="light-2"
            margin="medium"
          >
            <GHeading>Sample</GHeading>
            <p>Sample description provided</p>
          </GBox>
        </GTile>
      </GTiles>
      <GSection appCentered={true} justify="center" align="center" full={true}>
        <GHeading strong={true} tag="h2" style={{ paddingTop: '12px' }}>SHARE</GHeading>
        <p>
          Always be prepared
        </p>
        <GFooter justify="center" align="center">
           <GAnchor> 
            <GSocialFacebook />
           </GAnchor> 
           <GAnchor> 
            <GSocialTwitter />
           </GAnchor> 
        </GFooter>
      </GSection>
    </GBox>
  </GBox>
);

export default Home;
