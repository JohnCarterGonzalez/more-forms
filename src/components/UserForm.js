import React, { useState } from 'react';


const UserForm = (props) => {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");

  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);  // default value of false

  const createUser = (e) => {
    // we must prevent the default refresh of the browser to keep our state from being reset
    e.preventDefault();

    // shorthand ES6 syntax for building an object
    const newUser = { firstName, lastName, email, password };
    console.log("Welcome", newUser);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");

    // updating state will change the message to be displayed in the form
    setHasBeenSubmitted(true);
  };

  const formMessage = () => {
    if (hasBeenSubmitted) {
      return "Thank you for submitting the form!";
    } else {
      return "Welcome, please submit the form";
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.length < 1) {
      setFirstNameError("First Name is required!");
    } else if (e.target.value.length < 4) {
      setFirstNameError("First Name must be 4 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setFirstNameError("");
    }
  }

  const handleLastName = (e) => {
    setLastName(e.target.value);
    if (e.target.value.length < 1) {
      setLastNameError("Last Name is required!");
    } else if (e.target.value.length < 4) {
      setLastNameError("Last Name must be 4 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setLastNameError("");
    }
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (e.target.value.length < 1) {
      setEmailError("Email is required!");
    } else if (e.target.value.length < 4) {
      setEmailError("Email must be 4 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setEmailError("");
    }
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (e.target.value.length < 1) {
      setPasswordError("Password is required!");
    } else if (e.target.value.length < 4) {
      setPasswordError("Password must be 4 characters or longer!");
    } else {
      // an empty string is considered a "falsy" value
      setPasswordError("");
    }
  }
  return (
    <form onSubmit={createUser}>
      <h3>{formMessage()}</h3>
      <div>
        <label>First Name: </label>
        <input type="text" onChange={(e) => handleFirstName(e)} />
        {
          firstNameError ?
            <p>{firstNameError}</p> :
            ''
        }
      </div>
      <div>
        <label>Last Name: </label>
        <input type="text" onChange={(e) => handleLastName(e)} />
        {
          lastNameError ?
            <p>{lastNameError}</p> :
            ''
        }

      </div>
      <div>
        <label>Email Address: </label>
        <input type="text" onChange={(e) => handleEmail(e)} />
        {
          emailError ?
            <p>{emailError}</p> :
            ''
        }
      </div>
      <div>
        <label>Password: </label>
        <input type="text" onChange={(e) => handlePassword(e)} />
        {
          passwordError ?
            <p>{passwordError}</p> :
            ''
        }
      </div>
      {
        firstNameError ?
          <input type="submit" value="Create User" disabled /> :
          <input type="submit" value="Create User" />
      }
    </form>
  );
}

export default UserForm;
