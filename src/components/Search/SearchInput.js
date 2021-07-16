import React from "react";
import styled from "styled-components";
import { SearchContext } from "./SearchProvider";

const SearchInput = () => {
  const { searchValue, changeSearchValue } = React.useContext(SearchContext);
  return (
    <Input
      type="text"
      value={searchValue}
      onChange={changeSearchValue}
      placeholder="Search Something"
    />
  );
};

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

export default SearchInput;
