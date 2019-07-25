import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Filter extends Component {
  static propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    value: PropTypes.string.isRequired
  }

  render() {
    return (
      <Select onChange={this.props.onChange} value={this.props.value}>
        <option selected disabled>
          Search By
        </option>
        {this.props.keys.map(key => (
          <option>{key}</option>
        ))}
      </Select>
    )
  }
}

const Select = styled.select`
  display: block;
  margin: 15px 0px;
  font-size: 15px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-bottom: 2px solid #d4d4d4;
  background: none;
  transition: all 0.5s;
  outline: none;

  &:focus {
    transition: all 0.5s;
    border-bottom: 2px solid #4880e0;
  }
`
