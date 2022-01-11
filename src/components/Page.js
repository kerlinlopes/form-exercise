////////////////////////
// IMPORT DEP.
////////////////////////
// useState allows it to track state in a function component
// useEffect allows it to perform side effects in your component
import React, { useState, useEffect } from "react";
import Form from "./Form";

const Page = () => {
  const [occupations, setOccupations] = useState([]);
  const [statesDropdown, setStatesDropdown] = useState([]);

// useEffect to make initial calls to the url
  useEffect(() => {
    try {
      fetch("https://frontend-take-home.fetchrewards.com/form")
        .then((res) => res.json())
        .then((data) => {
          setOccupations(data.occupations);
          setStatesDropdown(data.states);
        });
    } catch {
      console.log("error");
    }
  }, []);
  return (
    <div>
      <div className="container">
        <div>
          <Form occupations={occupations} statesDropdown={statesDropdown} />
        </div>
      </div>
    </div>
  );
};

export default Page;
