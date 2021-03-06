import React, { Component } from 'react';

import GBox from 'grommet/components/Box';
import GHeading from 'grommet/components/Heading';
import GParagraph from 'grommet/components/Paragraph';
import GSection from 'grommet/components/Section';
import GFooter from 'grommet/components/Footer';
import GLabel from 'grommet/components/Label';
import GTiles from 'grommet/components/Tiles';
import GTile from 'grommet/components/Tile';
import GAnchor from 'grommet/components/Anchor';
import GImage from 'grommet/components/Image';

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
          { renderLastData(features) }
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
          { renderData(features) }
        </GTiles>
        <GSection appCentered={true} justify="center" align="center" full={true}>
          <GHeading strong={true} tag="h2" style={{ paddingTop: '12px' }}>SHARE</GHeading>
          <GParagraph>
            Always be prepared
          </GParagraph>
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

function renderLastData(features = []) {
  if (features[0]) {
    const p = features[0].properties;
    const text = `Last earthquake was ${timeSince(new Date(p.time))} ago`;

    return <GParagraph>{ text }</GParagraph>;
  }

  return null;
}

function renderData(features = []) {
  return features.map((feature, i) => {
    const p = feature.properties;
    const heading = `${p.mag}`;
    const formattedDate = new Date(p.time);
    const pid = p.ids.split(',')[1];
    const imageUrl = `https://earthquake.usgs.gov/archive/product/dyfi/${pid}/us/${p.updated}/${pid}_ciim_geo.jpg`;

    return (
      <GTile key={i}>
        <GBox
          pad="medium"
          colorIndex="light-2"
          margin="medium"
          style={{ paddingBottom: '0px', width: '300px' }}
        >
          {
            p.types.split(',').indexOf('dyfi') > -1 ? (
              <GBox>
                <GImage src={imageUrl} />
              </GBox>
            ) : <span />
          }
          <GAnchor href={p.url}>
            <GHeading strong={true} align="center" tag="h4" style={{ marginBottom: '0px' }}>{ `MAGNITUDE ${heading}` }</GHeading>
          </GAnchor>
          <GParagraph align="center">{ p.place }</GParagraph>
          <GBox style={{ paddingBottom: '10px' }}>
            <GLabel align="center" size="small">{ `${formatDate(formattedDate)} at ${formatTime(formattedDate)}` }</GLabel>
          </GBox>
        </GBox>
      </GTile>
    );
  });
}

function formatDate(date) {
  const monthNames = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December',
  ];

  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day} ${year}`;
}

function formatTime(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';
  hours %= 12;
  if (!hours) hours = 12;
  minutes = minutes < 10 ? `0${minutes}` : minutes;

  return `${hours}:${minutes} ${ampm}`;
}

function timeSince(date) {
  const seconds = Math.floor((new Date() - date) / 1000);

  let interval = Math.floor(seconds / 31536000);

  if (interval > 1) return `${interval} years`;

  interval = Math.floor(seconds / 2592000);
  if (interval > 1) return `${interval} months`;

  interval = Math.floor(seconds / 86400);
  if (interval > 1) return `${interval} days`;

  interval = Math.floor(seconds / 3600);
  if (interval > 1) return `${interval} hours`;

  interval = Math.floor(seconds / 60);
  if (interval > 1) return `${interval} minutes`;

  return `${Math.floor(seconds)} seconds`;
}

export default Home;
