import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

export default class CreateBoardModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      value: ''
    }
  }

  onChangeName = (event) => {
    this.setState({ value: event.target.value })
  }

  handleOpen = () => {
    this.props.handleOpenCreateBoard()
  };

  handleClose = () => {
    this.setState({ value: '' });
    this.props.handleCloseCreateBoard()
  };

  handleSubmit = () => {
    if (this.state.value.trim()) {
      this.props.handleSubmit(this.state.value.trim())
      this.handleClose()
    }
  }

  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        onClick={this.handleSubmit}
      />,
    ];

    return (
      <div>
        <Dialog
          title="Create new Ticket Board"
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
            <TextField
              hintText="Enter name of the Board"
              floatingLabelText="Name"
              fullWidth={true}
              onChange={(value) => this.onChangeName(value)}
              value={this.state.value}
            />  
          </div>
        </Dialog>
      </div>
    );
  }
}