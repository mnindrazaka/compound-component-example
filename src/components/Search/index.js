import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SearchInput from './SearchInput'
import SearchFilter from './SearchFilter'
import SearchResult from './SearchResult'

export default class Search extends Component {
  static propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    placeholder: PropTypes.string
  }

  state = {
    searchValue: '',
    searchKey: this.props.keys[0]
  }

  changeSearchValue = event => {
    this.setState({ searchValue: event.target.value })
  }

  changeSearchKey = event => {
    this.setState({ searchKey: event.target.value })
  }

  getResults = () => {
    return this.state.searchValue.length > 0
      ? this.props.items.filter(item =>
          item[this.state.searchKey].includes(this.state.searchValue)
        )
      : []
  }

  render() {
    return (
      <div>
        <SearchFilter keys={this.props.keys} onChange={this.changeSearchKey} />

        <SearchInput
          value={this.state.searchValue}
          onChange={this.changeSearchValue}
          placeholder={this.props.placeholder}
        />
        <SearchResult items={this.getResults()} />
      </div>
    )
  }
}

Search.propTypes = {}
