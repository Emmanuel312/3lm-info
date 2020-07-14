import { createActions, createReducer } from "reduxsauce";

interface IEmployee {
  id: 1;
  name: string;
  lastName: string;
  officeId: number;
  dateOfBirth: string;
  salary: number;
}

interface IStore {
  employees: IEmployee[];
  loading: boolean;
  error: boolean;
}

// Action types & creators
export const { Types, Creators } = createActions({
  // lista todos os funcionarios
  getEmployeesRequest: [],
  getEmployeesSuccess: ["employees"],
  getEmployeesFailure: [],
  // lista um funcionario por id
  getEmployeeRequest: ["id"],
  getEmployeeSuccess: ["employee"],
  getEmployeeFailure: [],
});

// Handlers
const INITIAL_STATE: IStore = {
  employees: [],
  loading: false,
  error: false,
};

const getEmployeesRequest = (state = INITIAL_STATE) => {
  return { ...state, loading: true, error: false };
};

const getEmployeesSuccess = (state = INITIAL_STATE, action: any): IStore => {
  return {
    ...state,
    loading: false,
    error: false,
    employees: [...state.employees, action.employees],
  };
};

const getEmployeesFailure = (state = INITIAL_STATE) => {
  return { ...state, loading: false, error: true };
};

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,
});
