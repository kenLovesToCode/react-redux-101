import React, { useState } from "react";
import JobPositionEditor from "./JobPositionEditor";
import JobPositionTable from "./JobPositionTable";

export function JobPositionDisplay(props) {
  const [showEditor, setShowEditor] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const createJobPosition = () => {
    setShowEditor(true);
    setSelectedJob({});
  };

  const saveJobPosition = (data) => {
    props.saveCallback(data);
    setShowEditor(false);
    setSelectedJob(null);
  };

  const startEditing = (data) => {
    setSelectedJob(data);
    setShowEditor(true);
  };

  const cancelEditing = () => {
    setSelectedJob(null);
    setShowEditor(false);
  };

  if (showEditor) {
    //editing
    return (
      <JobPositionEditor
        saveCallback={saveJobPosition}
        jobPosition={selectedJob}
        cancelCallback={cancelEditing}
      />
    );
  } else {
    //show table
    return (
      <div>
        <h1>Job Positions List</h1>

        <JobPositionTable
        // jobPositions={props.jobPositions}
        // editCallback={startEditing}
        // deleteCallback={props.deleteCallback}
        />
        <button onClick={createJobPosition}>Create new job position</button>
      </div>
    );
  }
}

export default JobPositionDisplay;
