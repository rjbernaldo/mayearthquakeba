import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import GApp from 'grommet/components/App';
import GBox from 'grommet/components/Box';
import GSplit from 'grommet/components/Split';

import Home from '../containers/Home';

class App extends React.Component {
  componentDidMount() {
    this.props.fetchData();
  }

  render() {
    return (
      <GApp centered={false} inline={true}>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </GApp>
    );
  }
}

export default App;
