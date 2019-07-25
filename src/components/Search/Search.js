import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Filter from './Filter'
import Result from './Result'

export default class Search extends Component {
  static propTypes = {
    fields: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired
  }

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
    return (
      <>
        <Filter
          fields={this.props.fields}
          value={this.state.currentField}
          onChange={this.changeCurrentField}
        />

        <Input value={this.state.keyword} onChange={this.changeKeyword} />

        <Result
          items={this.props.items}
          currentField={this.state.currentField}
          keyword={this.state.keyword}
        />
      </>
    )
  }
}

Search.propTypes = {}
