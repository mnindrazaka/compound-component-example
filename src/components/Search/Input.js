import React, { Component } from 'react'
import styled from 'styled-components'
import { Consumer } from './context'

export class Input extends Component {
  render() {
    return (
      <Consumer>
        {({ keyword, changeKeyword }) => (
          <CustomInput
            type="text"
            value={keyword}
            onChange={changeKeyword}
            placeholder="Search Something"
          />
        )}
      </Consumer>
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
