import React from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const style = {
  position: 'fixed',
  right: '20px',
  bottom: '20px'
};

export default class FloatingActionButtonWrapper extends React.Component {

  handleOpenCreateTicket = () => {
    this.props.handleOpenCreateTicket()
  }

  render() {
    return (
      <FloatingActionButton style={style} onClick={() => this.props.handleOpenCreateTicket()}>
        <ContentAdd />
      </FloatingActionButton>
    )
  }
}