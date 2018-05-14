import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';

export default class DrawerWrapper extends React.Component {

  constructor(props) {
    super(props);
  }

  onBoardSelected = (name) => {
    this.props.selectBoard(name)
    this.props.toggleDrawer()
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={250}
          open={this.props.open}
          onRequestChange={(open) => this.props.toggleDrawer()}
        >
          <AppBar title="Boards" onLeftIconButtonClick={this.props.toggleDrawer} />

          {
            this.props.boards.map((board) => {
              return <div>
                <MenuItem checked={board.name === this.props.selected} value={board.name} onClick={() => this.onBoardSelected(board.name)}>{board.name}</MenuItem>
                <Divider />
              </div>
            })
          }
        </Drawer>
      </div>
    );
  }
}