import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';


export default class AppBarActions extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton iconStyle={{ color: '#fff' }}><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem primaryText="Create Board" onClick={this.props.handleOpenCreateBoard}/>
          <MenuItem primaryText="Remove Board" onClick={this.props.handleremoveBoard}/>
        </IconMenu>
      </div>
    );
  }
}