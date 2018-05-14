import React from 'react';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import {
  ON_HOLD,
  TO_DO,
  IN_PROGRESS,
  DONE,
  CODE_REVIEW,
  VERIFIED,
  QAED
} from '../constants'


export default class TicketActions extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton ><MoreVertIcon /></IconButton>
          }
          targetOrigin={{ horizontal: 'right', vertical: 'top' }}
          anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
        >
          <MenuItem primaryText="On Hold" onClick={() => this.props.updateStatus({ from: this.props.status, to: ON_HOLD, index: this.props.index })} />
          <MenuItem primaryText="To Do" onClick={() => this.props.updateStatus({ from: this.props.status, to: TO_DO, index: this.props.index })} />
          <MenuItem primaryText="In Progress" onClick={() => this.props.updateStatus({ from: this.props.status, to: IN_PROGRESS, index: this.props.index })} />
          <MenuItem primaryText="Done" onClick={() => this.props.updateStatus({ from: this.props.status, to: DONE, index: this.props.index })} />
          <MenuItem primaryText="Code Review" onClick={() => this.props.updateStatus({ from: this.props.status, to: CODE_REVIEW, index: this.props.index })} />
          <MenuItem primaryText="Verified" onClick={() => this.props.updateStatus({ from: this.props.status, to: VERIFIED, index: this.props.index })} />
          <MenuItem primaryText="QAED" onClick={() => this.props.updateStatus({ from: this.props.status, to: QAED, index: this.props.index })} />
        </IconMenu>
      </div>
    );
  }
}