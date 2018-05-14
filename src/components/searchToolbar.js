import React from 'react';
import TextField from 'material-ui/TextField';
import { transitions } from 'material-ui/styles';

export default class SearchField extends React.Component {

  onTiketSearch = (value) => {
    this.props.searchTikets(value.target.value)
  }

  render() {
    return (
      <div style={{ height: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{this.props.title}</div>
        <TextField
          hintText="Search..."
          style={{ backgroundColor: '#4DD0E1', paddingLeft: 16, width: '30%', borderRadius: 25 }}
          underlineShow={false}
          inputStyle={{ color: '#fff', borderRadius: '25px' }}
          hintStyle={{ color: '#fff' }}
          onChange={this.onTiketSearch}
        />
      </div>
    )
  }
}