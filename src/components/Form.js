import React, { useState } from "react";

function Form() {
  const [formData, setFormData] = useState({
    firstName: "Geoffrey",
    lastName: "Kinuthia",
    admin: false,
  });

  function handleFirstNameChange(event) {
    setFormData({
      ...formData,
      firstName: event.target.value,
    });
  }

  function handleChange(event) {
    const name = event.target.name;
    let value = event.target.value;

    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(formData);
  }

  function handleLastNameChange(event) {
    setFormData({
      ...formData,
      lastName: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleFirstNameChange}
      />
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleLastNameChange}
      />
      <input
        type="checkbox"
        name="admin"
        onChange={handleChange}
        checked={formData.admin}
      />
      <button type="submit">submit</button>
    </form>
  );
}

export default Form;
