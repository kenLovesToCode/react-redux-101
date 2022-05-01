import { configureStore } from "@reduxjs/toolkit";
import modelReducer from "./modelReducer";
import stateReducer from "./stateReducer";

export default configureStore({
  reducer: {
    modelReducer: modelReducer,
    stateReducer: stateReducer,
  },
});

export {
  saveUser,
  saveJobPosition,
  deleteUser,
  deleteJobPosition,
} from "./modelActionCreators";

export {
  startCreatingUser,
  startEditingUser,
  endEditingUser,
} from "./stateActions";
