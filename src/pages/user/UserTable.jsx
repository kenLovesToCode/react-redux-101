import React from "react";
import { connect } from "react-redux";

import { deleteUser } from "../../oldStore";
import { startEditingUser } from "../../oldStore";

const mapStateToProps = (state) => ({
  users: state.modelReducer.users,
});

const mapDispatchToProps = {
  deleteCallback: deleteUser,
  editCallback: startEditingUser,
};

export function UserTable(props) {
  return (
    <table className="table-fixed w-full text-left">
      <thead className="text-sm uppercase bg-gray-50">
        <tr>
          <th scope="col" className="px-6 py-3">
            ID
          </th>
          <th scope="col" className="px-6 py-3">
            First name
          </th>
          <th className="px-6 py-3">Last name</th>
          <th className="px-6 py-3">Age</th>
          <th className="px-6 py-3">Job Title</th>
          <th className="px-6 py-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.users.map((user) => (
          <tr className="border-b border-zinc-300" key={user.id}>
            <th className="px-6 py-2">{user.id}</th>
            <td className="px-6 py-2">{user.firstName}</td>
            <td className="px-6 py-2">{user.lastName}</td>
            <td className="px-6 py-2">{user.age}</td>
            <td className="px-6 py-2">{user.jobTitle}</td>
            <td className="px-6 py-2">
              <button
                className="bg-amber-300 px-1 rounded-lg text-sm"
                onClick={() => props.editCallback(user)}
              >
                <small>Edit</small>
              </button>{" "}
              |{" "}
              <button
                className="bg-red-400 px-1 rounded-lg text-sm"
                onClick={() => props.deleteCallback(user)}
              >
                <small>Delete</small>
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(UserTable);
