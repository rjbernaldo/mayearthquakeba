import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GHeading from 'grommet/components/Heading';
import GSection from 'grommet/components/Section';
import GFooter from 'grommet/components/Footer';
import GLabel from 'grommet/components/Label';
import GTiles from 'grommet/components/Tiles';
import GTile from 'grommet/components/Tile';
import GAnchor from 'grommet/components/Anchor';

import GDown from 'grommet/components/icons/base/Down';
import GSocialFacebook from 'grommet/components/icons/base/SocialFacebook';
import GSocialTwitter from 'grommet/components/icons/base/SocialTwitter';

const Home = ({ data }) => {
  const { features } = data;

  return (
    <GBox flex="grow">
      <GBox pad="medium" style={{ paddingTop: '0px', paddingBottom: '0px' }}>
        <GSection appCentered={true} justify="center" align="center" full={true} style={{ marginTop: '-50px', paddingBottom: '50px' }}>
          <GHeading strong={true} tag="h2" style={{ paddingTop: '0px' }}>WALA</GHeading>
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
          {
            renderData(features)
          }
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
};

function renderData(features = []) {
  return features.map((feature, i) => {
    const p = feature.properties;
    console.log(p);
    const heading = `Magnitude ${p.mag}`;

    return (
      <GTile key={i}>
        <GBox
          pad="medium"
          colorIndex="light-2"
          margin="medium"
          style={{ paddingBottom: '0px' }}
        >
          <GHeading tag="h3" style={{ marginBottom: '0px' }}>{ heading }</GHeading>
          <p>{ p.place }</p>
        </GBox>
      </GTile>
    );
  });
}

export default Home;
