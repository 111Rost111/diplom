import React, { PureComponent } from 'react'
import AppBar from '../components/toolbar'
import Drawer from '../components/drawer'
import Layout from './Layout'
import FloatingActionButton from '../components/floatingActionButton'
import CreateBoardModal from '../components/createBoardModal'
import CreateTiketModal from '../components/createTicketModal'
import { toggleDrawer } from '../actions/drawer'
import * as manageBoards from '../actions/boards'
import * as manageTikets from '../actions/tikets'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

class Main extends PureComponent {

  render() {
    const {
      toggleDrawer,
      drawer,
      manageBoards,
      createBoardModal,
      createTiketModal,
      boards,
      manageTikets,
      tikets,
      selectedBoardName
    } = this.props

    const {
      closeCreateBoardModal,
      createBoard,
      openCreateBoardModal,
      selectBoard,
      removeBoard
    } = manageBoards

    const {
      openCreateTiketModal,
      closeCreateTiketModal,
      createTiket,
      updateStatus,
      searchTikets,
    } = manageTikets
    return (
      <div style={{height: '100%'}}>
        <AppBar
          title={selectedBoardName || 'DASBOARD'}
          onDrawerToggle={toggleDrawer}
          handleOpenCreateBoard={openCreateBoardModal}
          handleremoveBoard={removeBoard}
          removeBoard
          searchTikets={searchTikets}
        />
        <Drawer
          open={drawer}
          toggleDrawer={toggleDrawer}
          boards={boards}
          selectBoard={selectBoard}
          selected={selectedBoardName}
        />
        <CreateBoardModal
          open={createBoardModal}
          handleCloseCreateBoard={closeCreateBoardModal}
          handleSubmit={createBoard}
        />
        <CreateTiketModal
          open={createTiketModal}
          handleCloseCreateTiket={closeCreateTiketModal}
          handleSubmit={createTiket}
        />
        <Layout tikets={tikets} updateStatus={updateStatus} />
        <FloatingActionButton handleOpenCreateTicket={openCreateTiketModal}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  drawer: state.drawer.drawer,
  createBoardModal: state.boards.createBoardModal,
  boards: state.boards.boards,
  selectedBoardName: state.boards.selectedBoardName,

  createTiketModal: state.tickets.createTiketModal,

  tikets: state.tickets.tikets,
  selectedBoardName: state.boards.selectedBoardName
  
  

})

function mapDispatchToProps(dispatch) {
  return {
    toggleDrawer: bindActionCreators(toggleDrawer, dispatch),

    manageBoards: bindActionCreators(manageBoards, dispatch),

    manageTikets: bindActionCreators(manageTikets, dispatch),


  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Main)

