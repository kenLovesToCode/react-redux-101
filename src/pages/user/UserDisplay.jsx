import React, { useState } from "react";
import { connect } from "react-redux";

import { startCreatingUser } from "../../oldStore";

import UserEditor from "./UserEditor";
import UserTable from "./UserTable";

const mapStateToProps = (state) => ({
  editing: state.stateReducer.editing,
});

const mapDispatchToProps = {
  createUser: startCreatingUser,
};

export function UserDisplay(props) {
  // const [showEditor, setShowEditor] = useState(false);
  // const [selectedUser, setSelectedUser] = useState(null);

  // const createUser = () => {
  //   setShowEditor(true);
  //   setSelectedUser({});
  // };

  // const cancelEditing = () => {
  //   setShowEditor(false);
  //   setSelectedUser(null);
  // };

  // const saveUser = (data) => {
  //   props.saveCallback(data);
  //   setShowEditor(false);
  //   setSelectedUser(null);
  // };

  // const startEditing = (data) => {
  //   setSelectedUser(data);
  //   setShowEditor(true);
  // };

  if (props.editing) {
    return <UserEditor />;
  } else {
    return (
      <div className="">
        <h1 className="p-4 font-bold text-3xl border-b-4 border-cyan-500 w-max mb-4">
          Users List
        </h1>
        <UserTable />
        <button
          onClick={props.createUser}
          className="bg-green-500 px-4 py-2 rounded-lg mt-3 hover:bg-green-600"
        >
          Create new user
        </button>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserDisplay);
