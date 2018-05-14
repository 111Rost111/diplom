import React, { PureComponent } from 'react'
import * as manageBoards from '../actions/boards'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Column from './Column'
import {
  ON_HOLD,
  TO_DO,
  IN_PROGRESS,
  DONE,
  CODE_REVIEW,
  VERIFIED,
  QAED
} from '../constants'

class Layout extends PureComponent {

  render() {
    console.log(this.props.tikets)
    return (
      <div style={{ padding: '80px 15px 0px 15px', display: 'flex', alignItems: 'flex-start', flexDirection: 'row', height: '100%'}}>
        <Column title={'ON HOLD'} tikets={this.props.tikets[ON_HOLD]} updateStatus={this.props.updateStatus} status={ON_HOLD}/>
        <Column title={'TO DO'} tikets={this.props.tikets[TO_DO]} updateStatus={this.props.updateStatus} status={TO_DO}/>
        <Column title={'IN PROGRESS'} tikets={this.props.tikets[IN_PROGRESS]} updateStatus={this.props.updateStatus} status={IN_PROGRESS}/>
        <Column title={'CODE REVIEW'} tikets={this.props.tikets[CODE_REVIEW]} updateStatus={this.props.updateStatus} status={CODE_REVIEW}/>
        <Column title={'DONE'} tikets={this.props.tikets[DONE]} updateStatus={this.props.updateStatus} status={DONE}/>
        <Column title={'VERIFIED'} tikets={this.props.tikets[VERIFIED]} updateStatus={this.props.updateStatus} status={VERIFIED}/>
        <Column title={'QAED'} tikets={this.props.tikets[QAED]} updateStatus={this.props.updateStatus} status={QAED}/>
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
)(Layout)

