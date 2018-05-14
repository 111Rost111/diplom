import React  from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import AppBarActions from './appBarActions';

import SearchField from '../components/searchToolbar'

export default class AppBarWrapper extends React.Component {


  onDrawerToggle = () => {
    this.props.onDrawerToggle()
  }

  render() {
    return (
      <AppBar
        style={{ overflow: 'hidden', position: 'fixed', top: 0}}  
        title={<SearchField title={this.props.title} searchTikets={this.props.searchTikets}/>}
        iconElementRight={<AppBarActions handleOpenCreateBoard={this.props.handleOpenCreateBoard} handleremoveBoard={this.props.handleremoveBoard}/>}
        onLeftIconButtonClick={this.onDrawerToggle}
      />
    )
  }
}