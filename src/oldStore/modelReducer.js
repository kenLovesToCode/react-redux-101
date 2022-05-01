import { STORE, UPDATE, DELETE } from "./modelActionTypes";
import { initialData } from "./initialData";

export default function (storeData, action) {
  switch (action.type) {
    case STORE:
      return {
        ...storeData,
        counterId: action.payload.id + 1,
        [action.dataType]: storeData[action.dataType].concat([action.payload]),
      };

    case UPDATE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].map((data) =>
          data.id === action.payload.id ? action.payload : data
        ),
      };

    case DELETE:
      return {
        ...storeData,
        [action.dataType]: storeData[action.dataType].filter(
          (data) => data.id !== action.payload
        ),
      };

    default:
      return storeData || initialData.modelData;
  }
}
