import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { Consumer } from './context'

export class Filter extends Component {
  static propTypes = {
    keys: PropTypes.arrayOf(PropTypes.string).isRequired,
    placeholder: PropTypes.string
  }

  render() {
    return (
      <Consumer>
        {({ searchKey, changeSearchKey }) => (
          <label>
            {this.props.label}
            <Select onChange={changeSearchKey} value={searchKey}>
              <option disabled selected>
                {this.props.placeholder}
              </option>
              {this.props.keys.map(key => (
                <option>{key}</option>
              ))}
            </Select>
          </label>
        )}
      </Consumer>
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
