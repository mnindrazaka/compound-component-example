import React from "react";
import styled from "styled-components";
import { SearchContext } from "./SearchProvider";

const SearchFieldSelector = (props) => {
  const { searchField, changeSearchField } = React.useContext(SearchContext);
  return (
    <Select onChange={changeSearchField} value={searchField}>
      <option disabled value="">
        Search By
      </option>
      {props.fields.map((field) => (
        <option key={field}>{field}</option>
      ))}
    </Select>
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

export default SearchFieldSelector;
