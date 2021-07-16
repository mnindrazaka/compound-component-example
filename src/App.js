import React from "react";
import SearchProvider from "./components/Search/SearchProvider";
import SearchFieldSelector from "./components/Search/SearchFieldSelector";
import SearchInput from "./components/Search/SearchInput";
import SearchResult from "./components/Search/SearchResult";
import "./App.css";

function App() {
  return (
    <SearchProvider>
      <SearchFieldSelector fields={["name", "phone"]} />
      <SearchInput />
      <SearchResult
        items={[
          { name: "aka", phone: "085331247098" },
          { name: "zaka", phone: "085331247097" },
          { name: "nindra", phone: "085331247096" },
        ]}
      />
    </SearchProvider>
  );
}

export default App;
