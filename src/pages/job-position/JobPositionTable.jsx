import React from "react";

import { connect } from "react-redux";

import { saveJobPosition, deleteJobPosition } from "../../oldStore";
//redux
const mapStateToProps = (state) => ({
  jobPositions: state.modelReducer.jobPositions,
});

const mapDispatchToProps = {
  saveCallback: saveJobPosition,
  deleteCallback: deleteJobPosition,
};

export function JobPositionTable(props) {
  return (
    <table className="table-fixed">
      <thead>
        <tr>
          <th>ID</th>
          <th>Job Title</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.jobPositions.map((jp) => (
          <tr key={jp.id}>
            <th>{jp.id}</th>
            <td>{jp.jobTitle}</td>
            <td>
              <button onClick={() => props.editCallback(jp)}>Edit</button>
              <button onClick={() => props.deleteCallback(jp.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPositionTable);
