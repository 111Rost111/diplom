import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import AppBar from 'material-ui/AppBar';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import TicketActions from '../components/ticketActions'
import { priority, types } from '../constants'


export default class Ticket extends React.Component {

  constructor(props) {
    super(props);
  }

  trimStrim = (string = '') => {
    if (string.length > 40) return string.substring(0, 40) + '...'
    return string
  }

  render() {
    if (!this.props.tiket) return
    const ticketPriority = priority[this.props.tiket.priority] || ''
    const ticketType = types[this.props.tiket.issueType] || ''
    return (
      <div style={styleDiv}>
        <Paper style={style} zDepth={1}>
          <div style={{
            position: 'relative',
            height: '100%',
            justifyContent: 'center',
            width: '2px',
            backgroundColor: ticketType.color,
            float: 'left',
          }}></div>
          <div style={{ height: 47, paddingLeft: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', float: 'left' }}>{ticketPriority}</div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}><TicketActions index={this.props.index} updateStatus={this.props.updateStatus} status={this.props.status} /></div>
          <Divider />

          <div style={{ padding: '10px', textAlign: 'left' }} >{this.trimStrim(this.props.tiket.description)}</div>
        </Paper>
      </div>
    );
  }
}

const style = {
  height: '150px',
  width: 'calc(100% - 10px)',
  textAlign: 'center',
  display: 'inline-block',
};

const styleDiv = {
  height: '150px',
  width: 'calc(100% - 10px)',
  textAlign: 'center',
  paddingTop: '10px',
  display: 'inline-block',
};