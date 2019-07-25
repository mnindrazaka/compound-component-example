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
    field: undefined
  }

  changeKeyword = event => {
    this.setState({ keyword: event.target.value })
  }

  changeField = event => {
    this.setState({ field: event.target.value })
  }

  render() {
    return (
      <div>
        <Filter
          fields={this.props.fields}
          value={this.state.field}
          onChange={this.changeField}
        />

        <Input value={this.state.keyword} onChange={this.changeKeyword} />

        <Result
          items={this.props.items}
          field={this.state.field}
          keyword={this.state.keyword}
        />
      </div>
    )
  }
}

Search.propTypes = {}
