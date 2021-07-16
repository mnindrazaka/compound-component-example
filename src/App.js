import React from "react";
import Search from "./Search";
import "./App.css";

function App() {
  return (
    <>
      <Search
        fields={["name", "phone"]}
        items={[
          { name: "aka", phone: "085331247098" },
          { name: "zaka", phone: "085331247097" },
          { name: "nindra", phone: "085331247096" },
        ]}
      />
    </>
  );
}

export default App;
