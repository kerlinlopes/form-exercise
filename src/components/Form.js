////////////////////////
// IMPORT DEP.
////////////////////////
// useState allows it to track state in a function component
import React, { useState } from "react";
//import swal from "sweetalert";
import styles from "../styles/styles.css";

////////////////////////
// form function
////////////////////////
const Form = ({ occupations, statesDropdown }) => {
  const [fullname, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [occupation, setOccupation] = useState("");
  const [stateOption, setStateOption] = useState("");
  const [error, setError] = useState(false);

  // handlesubmit function to handle the form submission
  const handleSubmit = async (e) => {
    if (
      fullname &&
      // I used the includes() method so it determins whether the "@" character is in the email field. I could've used a validator but this way is easier and convinent.
      email.includes("@") &&
      password &&
      occupation &&
      stateOption
    ) {
      await fetch("https://frontend-take-home.fetchrewards.com/form", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          fullname: fullname,
          email: email,
          password: password,
          occupation: occupation,
          state: stateOption,
        }),
      })
        .then(
            // popup alert 
            window.alert("Your form has been submitted")
        )
        .catch(() => setError(true));
    } else {
      e.preventDefault();
      setError(true);
    }
  };

  return (
    <div className={styles.page}>
      <form className={styles.container}>
        <div>
          <label htmlFor="name">Full Name</label>
          <input
            placeholder="Full name"
            type="text"
            id="input-field"
            className={error && !fullname}
            value={fullname}
            onChange={(e) => setFullName(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            placeholder="email@.com"
            type="text"
            id="input-field"
            className={(error && !email.includes("@"))}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            placeholder="password"
            type="password"
            id="input-field"
            className={error && !password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <label htmlFor="occupation">Occupation</label>
        <select
          className={error && !occupation}
          value={occupation}
          id="input-field"
          onChange={(e) => setOccupation(e.target.value)}
        >
          <option>Select your occupation</option>
          {occupations.map((job, index) => {
            return (
              <option key={index} value={job}>
                {job}
              </option>
            );
          })}
        </select>

        <label htmlFor="state">State</label>
        <select
          className={error && !stateOption}
          onChange={(e) => setStateOption(e.target.value)}
          id="input-field"
        >
          <option>Select your state</option>
          {statesDropdown.map((state, index) => {
            return (
              <option key={index} value={state.name}>
                {state.name}
              </option>
            );
          })}
        </select>
        <button
          type="submit"
          className="button"
          onClick={(e) => handleSubmit(e)}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
