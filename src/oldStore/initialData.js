import { USERS, JOB_POSITIONS } from "./dataTypes";

export const initialData = {
  modelData: {
    [USERS]: [
      {
        id: 1,
        firstName: "Joe",
        lastName: "Mama",
        age: 24,
        jobTitle: "React.js Developer",
      },
      {
        id: 2,
        firstName: "Jane",
        lastName: "Mama",
        age: 24,
        jobTitle: "Vue.js Developer",
      },
      {
        id: 3,
        firstName: "John",
        lastName: "Doe",
        age: 24,
        jobTitle: "React.js Developer",
      },
    ],
    [JOB_POSITIONS]: [
      { id: 1, jobTitle: "React.js Developer" },
      { id: 2, jobTitle: "Vue.js Developer" },
    ],
  },
  stateData: {
    editing: false,
    selectedId: -1,
    selectedType: USERS,
    counterId: 4,
  },
};
