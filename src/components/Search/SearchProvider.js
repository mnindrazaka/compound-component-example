import React from "react";

export const SearchContext = React.createContext();

const SearchProvider = (props) => {
  const [searchValue, setSearchValue] = React.useState("");
  const [searchField, setSearchField] = React.useState("");

  const changeSearchValue = (event) => {
    setSearchValue(event.target.value);
  };

  const changeSearchField = (event) => {
    setSearchField(event.target.value);
  };

  const providerValue = {
    searchValue,
    changeSearchValue,
    searchField,
    changeSearchField,
  };

  return (
    <SearchContext.Provider value={providerValue}>
      {props.children}
    </SearchContext.Provider>
  );
};

export default SearchProvider;
