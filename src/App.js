import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { enquireScreen } from 'enquire-js';
import Header3 from './Layout/Nav3';
import Home from './Home';
import RDP from './RDP';
import DFP from './DFP';
import EAM from './EAM';
import WMS from './WMS';
import SRIS from './SRIS';
import MES from './MES';
//import HSE from './HSE';
import ETM from './ETM';
import ICM from './ICM';
import LIP from './LIP';
import TCC from './TCC';
import Industry from './Industry';
import List from './List';
import About from './About';
import Footer from './Layout/Footer0';

import {
  Nav30DataSource,
  Footer00DataSource,
} from './Layout/data.source.js';

let isMobile;
enquireScreen((b) => {
  isMobile = b;
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile,
    };
  }
  componentDidMount() {
    // 适配手机屏幕;
    enquireScreen((b) => {
      this.setState({ isMobile: !!b });
    });
  }
  render() {
    return (
      <Router>
        <div>
          <Header3 dataSource={Nav30DataSource} isMobile={this.state.isMobile} />
          <Route exact path="/" component={Home} />
          <Route exact path="/Industry" component={Industry} />
          <Route exact path="/RDP" component={RDP} />
          <Route exact path="/DFP" component={DFP} />
          <Route exact path="/EAM" component={EAM} />
          <Route exact path="/WMS" component={WMS} />
          <Route exact path="/SRIS" component={SRIS} />
          <Route exact path="/MES" component={MES} />
          <Route exact path="/ETM" component={ETM} />
          <Route exact path="/ICM" component={ICM} />
          <Route exact path="/LIP" component={LIP} />
          <Route exact path="/TCC" component={TCC} />
          <Route exact path="/About" component={About} />
          <Route exact path="/List" component={List} />
          <Footer dataSource={Footer00DataSource} isMobile={this.state.isMobile} />
        </div>
      </Router>
    );
  }
}

export default App;
