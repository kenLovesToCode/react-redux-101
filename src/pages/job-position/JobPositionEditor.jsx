import React, { useReducer } from "react";

export default function JobPositionEditor(props) {
  const [jpInput, setJpInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }),
    {
      id: props.jobPosition.id || "",
      jobTitle: props.jobPosition.jobTitle || "",
    }
  );

  const saveJobPosition = (e) => {
    e.preventDefault();
    props.saveCallback(jpInput);
  };

  const handleChange = (e) => {
    const name = e.target.name;
    const newValue = e.target.value;

    setJpInput({
      [name]: newValue,
    });
  };

  return (
    <div>
      <form className="flex flex-col gap-2" onSubmit={saveJobPosition}>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Enter new job position..."
          name="jobTitle"
          required
          value={jpInput.jobTitle}
        />
        <button type="submit">Save</button>
        <button onClick={props.cancelCallback}>Cancel</button>
      </form>
    </div>
  );
}
