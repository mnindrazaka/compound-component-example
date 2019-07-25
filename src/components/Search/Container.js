import React, { Component } from 'react'
import { Provider } from './context'

export class Container extends Component {
  state = {
    keyword: '',
    field: undefined
  }

  changeKeyword = event => {
    this.setState({ keyword: event.target.value })
  }

  changeField = event => {
    this.setState({ field: event.target.value })
  }

  render() {
    const providerValue = {
      keyword: this.state.keyword,
      changeKeyword: this.changeKeyword,

      field: this.state.field,
      changeField: this.changeField
    }

    return <Provider value={providerValue}>{this.props.children}</Provider>
  }
}
