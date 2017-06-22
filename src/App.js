import React, { Component } from 'react';
import logo from './logo.svg';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';
import Paper from 'material-ui/Paper';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
import FlatIcon from 'material-design-icons/communication/svg/production/ic_business_24px.svg';
import './App.css';

const recentsIcon = <IconLocationOn />;
const favoritesIcon = <IconLocationOn />;
const nearbyIcon = <IconLocationOn />;

class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
    open: false,
    selectedIndex: 0
  };
}

  handleToggle = () => this.setState({open: !this.state.open});
  select = (index) => this.setState({selectedIndex: index});

  render() {
    const icon = <span style='width: 32px!imortant;'><img src={FlatIcon} /></span>;
    return (
      <div className="App">
      <AppBar
        title="ジョブたす転職"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
        onTouchTap={this.handleToggle}
      />
<Drawer open={this.state.open}>
  <MenuItem>Menu Item</MenuItem>
  <MenuItem>Menu Item 2</MenuItem>
</Drawer>
<Paper zDepth={1}>
  <BottomNavigation selectedIndex={this.state.selectedIndex}>
    <BottomNavigationItem
      label="Recents"
      icon={recentsIcon}
      onTouchTap={() => this.select(0)}
    />
    <BottomNavigationItem
      label="Favorites"
      icon={icon}
      onTouchTap={() => this.select(1)}
    />
    <BottomNavigationItem
      label="Nearby"
      icon={nearbyIcon}
      onTouchTap={() => this.select(2)}
    />
  </BottomNavigation>
</Paper>
      </div>
    );
  }
}

export default App;
