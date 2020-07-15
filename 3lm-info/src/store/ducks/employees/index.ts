import { createActions, createReducer } from "reduxsauce";
import { IStore } from "../../../interfaces";

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

  // deleta um funcionario por id
  deleteEmployeeRequest: ["id"],
  deleteEmployeeSuccess: ["id"],
  deleteEmployeeFailure: [],
});

// Handlers
const INITIAL_STATE: IStore = {
  employees: [],
  loading: false,
  error: false,
};

// get
const getEmployeesRequest = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: true, error: false };
};

const getEmployeesSuccess = (state = INITIAL_STATE, action: any): IStore => {
  return {
    ...state,
    loading: false,
    error: false,
    employees: [...action.employees],
  };
};

const getEmployeesFailure = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: false, error: true };
};

// delete

const deleteEmployeeRequest = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: true, error: false };
};

const deleteEmployeeSuccess = (state = INITIAL_STATE, action: any): IStore => {
  return {
    ...state,
    loading: false,
    error: false,
    employees: state.employees.filter((employee) => employee._id !== action.id),
  };
};

const deleteEmployeeFailure = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: false, error: true };
};

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,
  [Types.DELETE_EMPLOYEE_REQUEST]: deleteEmployeeRequest,
  [Types.DELETE_EMPLOYEE_SUCCESS]: deleteEmployeeSuccess,
  [Types.DELETE_EMPLOYEE_FAILURE]: deleteEmployeeFailure,
});
