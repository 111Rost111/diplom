import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { types, priority } from '../constants'

export default class CreateTicketModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      description: '',
      priority: '',
      issueType: '',
    }
  }

  onChangeDescription = (event) => {
    this.setState({ description: event.target.value })
  }

  onChangePriority = (event, index, value) => {
    this.setState({ priority: value })
  }

  onChangeType = (event, index, value) => {
    this.setState({ issueType: value })
  }

  handleOpen = () => {
    this.props.handleOpenCreateBoard()
  };

  handleClose = () => {
    this.setState({ description: '', priority: '', issueType: ''});
    this.props.handleCloseCreateTiket()
  };

  handleSubmit = () => {
    const { description, priority, issueType } = this.state
    if (description.trim() && priority !== '' && issueType !== '') {
      this.props.handleSubmit({description, priority, issueType})
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
          title="Create new Ticket"
          actions={actions}
          modal={true}
          open={this.props.open}
          onRequestClose={this.handleClose}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>

            <SelectField
              floatingLabelText="Priority"
              value={this.state.priority}
              onChange={this.onChangePriority}
              fullWidth={true}
            >
              {priority.map((value, index) => {
                return <MenuItem value={index} primaryText={value} />
              })}  
            </SelectField>

            <SelectField
              floatingLabelText="Issue Type"
              value={this.state.issueType}
              onChange={this.onChangeType}
              fullWidth={true}
            >
              {types.map((value, index) => {
                return <MenuItem value={index} primaryText={value.name} />
              })}
            </SelectField>


            <TextField
              hintText="Enter description"
              floatingLabelText="Description..."
              fullWidth={true}
              onChange={(value) => this.onChangeDescription(value)}
              value={this.state.description}
            />
          </div>
        </Dialog>
      </div>
    );
  }
}