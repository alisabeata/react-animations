import React, { Component } from 'react'
import './App.css'
import Modal from './components/Modal/Modal'
import Backdrop from './components/Backdrop/Backdrop'
import List from './components/List/List'

// Packages for animation:
// 1. react-transition-group  https://www.npmjs.com/package/react-transition-group
// 2. react-motion  https://github.com/chenglou/react-motion
// 3. react-move  https://github.com/sghall/react-move
// 4. react-router-transition  https://github.com/maisano/react-router-transition - for animating routing process

class App extends Component {
  state = {
    modalIsOpen: false,
  }

  showModal = () => {
    this.setState({ modalIsOpen: true })
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="app">
        <h1>React Animations</h1>
        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} closed={this.closeModal} />
        <button className="button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    )
  }
}

export default App
