import React, { Component } from 'react'
import { Provider } from './context'

export class Container extends Component {
  state = {
    keyword: '',
    currentField: ''
  }

  changeKeyword = event => {
    this.setState({ keyword: event.target.value })
  }

  changeCurrentField = event => {
    this.setState({ currentField: event.target.value })
  }

  render() {
    const providerValue = {
      keyword: this.state.keyword,
      changeKeyword: this.changeKeyword,

      currentField: this.state.currentField,
      changeCurrentField: this.changeCurrentField
    }

    return <Provider value={providerValue}>{this.props.children}</Provider>
  }
}
