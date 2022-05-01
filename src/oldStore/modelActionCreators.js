import { USERS, JOB_POSITIONS } from "./dataTypes";
import { STORE, UPDATE, DELETE } from "./modelActionTypes";
import { initialData } from "./initialData";

export const saveUser = (user) => (dispatch) => {
  dispatch(createSaveEvent(USERS, user));
};

export const saveJobPosition = (jp) => {
  createSaveEvent(JOB_POSITIONS, jp);
};

const createSaveEvent = (dataType, payload) => {
  const { counterId } = initialData.stateData;
  if (!payload.id) {
    //create
    return {
      type: STORE,
      dataType,
      payload: { ...payload, id: counterId },
    };
  } else {
    //update
    return {
      type: UPDATE,
      dataType,
      payload,
    };
  }
};

export const deleteUser = (user) => ({
  type: DELETE,
  dataType: USERS,
  payload: user.id,
});

export const deleteJobPosition = (jp) => ({
  type: DELETE,
  dataType: JOB_POSITIONS,
  payload: jp.id,
});
