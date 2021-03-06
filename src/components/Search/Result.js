import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

export default class Result extends Component {
  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.object).isRequired,
    keyword: PropTypes.string,
    currentField: PropTypes.string
  }

  getResults = () => {
    const { items, keyword, currentField } = this.props
    return keyword && currentField
      ? items.filter(item => item[currentField].includes(keyword))
      : []
  }

  render() {
    return (
      <>
        {this.getResults().map(item => (
          <Card>
            <table cellPadding="5px">
              {Object.keys(item).map(key => (
                <tr>
                  <td>
                    <b>{key}</b>
                  </td>
                  <td>{item[key]}</td>
                </tr>
              ))}
            </table>
          </Card>
        ))}
      </>
    )
  }
}

const Card = styled.div`
  display: block;
  margin: 15px 0px;
  padding: 10px 15px;
  font-size: 15px;
  border: 1px #d4d4d4 solid;
  border-radius: 2px;
  outline: none;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  &:hover {
    box-shadow: 0 10px 24px rgba(0, 0, 0, 0.25), 0 6px 6px rgba(0, 0, 0, 0.22);
  }
`
