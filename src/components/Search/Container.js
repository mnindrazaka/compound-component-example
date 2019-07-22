import React, { Component } from 'react'
import { Provider } from './context'

export class Container extends Component {
  state = {
    searchValue: '',
    searchKey: undefined
  }

  changeSearchValue = event => {
    this.setState({ searchValue: event.target.value })
  }

  changeSearchKey = event => {
    this.setState({ searchKey: event.target.value })
  }

  render() {
    const providerValue = {
      searchValue: this.state.searchValue,
      changeSearchValue: this.changeSearchValue,

      searchKey: this.state.searchKey,
      changeSearchKey: this.changeSearchKey
    }

    return <Provider value={providerValue}>{this.props.children}</Provider>
  }
}
