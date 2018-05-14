import React, { PureComponent } from 'react'
import * as manageBoards from '../actions/boards'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Ticket from '../components/ticket'

class Column extends PureComponent {

  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        margin: '5px',
        'border-radius': '15px',
        minHeight: 'calc(100vh - 80px)'
      }}>
        <div style={{ paddingTop: 10, color: '#ccc' }}>{this.props.title}</div>
        {this.props.tikets && this.props.tikets.map((tiket, index) => {
          return <Ticket tiket={tiket} updateStatus={this.props.updateStatus} status={this.props.status} index={index}/>
        })}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer.drawer,

})

// function mapDispatchToProps(dispatch) {
//   return {
//     toggleDrawer: bindActionCreators(toggleDrawer, dispatch),

//     manageBoards: bindActionCreators(manageBoards, dispatch),


//   }
// }

export default connect(
  mapStateToProps,
  // mapDispatchToProps
)(Column)

