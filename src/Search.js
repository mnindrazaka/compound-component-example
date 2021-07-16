import React from "react";
import styled from "styled-components";

const Search = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchField, setSearchField] = React.useState("");

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const changeSearchField = (event) => {
    setSearchField(event.target.value);
  };

  const filteredItems =
    searchValue && searchField
      ? props.items.filter((item) => item[searchField].includes(searchValue))
      : props.items;

  return (
    <div>
      <Select onChange={changeSearchField} value={searchField}>
        <option disabled value="">
          Search By
        </option>
        {props.fields.map((field) => (
          <option key={field}>{field}</option>
        ))}
      </Select>
      <Input
        type="text"
        value={searchValue}
        onChange={changeSearchValue}
        placeholder="Search Something"
      />
      {filteredItems.map((item, index) => (
        <Card key={index}>
          <table cellPadding="5px">
            {Object.keys(item).map((key) => (
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
    </div>
  );
};

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
`;

const Input = styled.input`
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
`;

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
`;

export default Search;
