import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Input from './Input'
import Filter from './Filter'
import Result from './Result'

export default class Search extends Component {
  static propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    inputPlaceholder: PropTypes.string,
    filterPlaceholder: PropTypes.string
  }

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
    return (
      <div>
        <Filter
          placeholder={this.props.filterPlaceholder}
          keys={this.props.keys}
          value={this.state.searchKey}
          onChange={this.changeSearchKey}
        />

        <Input
          placeholder={this.props.inputPlaceholder}
          value={this.state.searchValue}
          onChange={this.changeSearchValue}
        />

        <Result
          items={this.props.items}
          searchKey={this.state.searchKey}
          searchValue={this.state.searchValue}
        />
      </div>
    )
  }
}

Search.propTypes = {}
