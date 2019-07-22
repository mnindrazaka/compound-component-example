import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Input extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string
  }

  render() {
    return (
      <CustomInput
        type="text"
        value={this.props.value}
        onChange={this.props.onChange}
        placeholder={this.props.placeholder}
      />
    )
  }
}

const CustomInput = styled.input`
  display: block;
  margin: 15px 0px;
  font-size: 15px;
  padding: 10px 10px 10px 5px;
  border: none;
  border-bottom: 2px solid #d4d4d4;
  transition: all 0.5s;
  outline: none;

  &:focus {
    transition: all 0.5s;
    border-bottom: 2px solid #4880e0;
  }
`
