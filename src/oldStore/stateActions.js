import { USERS, JOB_POSITIONS } from "./dataTypes";
import {
  STATE_END_EDITING,
  STATE_START_CREATING,
  STATE_START_EDITING,
} from "./stateDataTypes";

export const startEditingUser = (user) => ({
  type: STATE_START_EDITING,
  dataType: USERS,
  payload: user,
});

export const endEditingUser = () => ({
  type: STATE_END_EDITING,
});

export const startCreatingUser = () => ({
  type: STATE_START_CREATING,
  dataType: USERS,
});
