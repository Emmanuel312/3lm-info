import { createActions, createReducer } from "reduxsauce";
import { IStore, IEmployee } from "../../../interfaces";

// Action types & creators
export const { Types, Creators } = createActions({
  // lista todos os funcionarios
  getEmployeesRequest: [],
  getEmployeesSuccess: ["employees"],
  getEmployeesFailure: [],

  // cria um funcionario
  postEmployeeRequest: ["employee"],
  postEmployeeSuccess: ["employee"],
  postEmployeeFailure: [],

  // deleta um funcionario por id
  deleteEmployeeRequest: ["id"],
  deleteEmployeeSuccess: ["id"],
  deleteEmployeeFailure: [],

  // atualiza um funcionario por id
  updateEmployeeRequest: ["id"],
  updateEmployeeSuccess: ["employee"],
  updateEmployeeFailure: [],
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

// post

const postEmployeeRequest = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: true, error: false };
};

const postEmployeeSuccess = (
  state = INITIAL_STATE,
  action: { employee: IEmployee }
): IStore => {
  return {
    ...state,
    loading: false,
    error: false,
    employees: [action.employee, ...state.employees],
  };
};

const postEmployeeFailure = (state = INITIAL_STATE): IStore => {
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

// update

const updateEmployeeRequest = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: true, error: false };
};

const updateEmployeeSuccess = (state = INITIAL_STATE, action: any): IStore => {
  return {
    ...state,
    loading: false,
    error: false,
    employees: state.employees.map((employee) =>
      employee._id !== action.employee._id ? employee : action.employee._id
    ),
  };
};

const updateEmployeeFailure = (state = INITIAL_STATE): IStore => {
  return { ...state, loading: false, error: true };
};

// Reducer
export default createReducer(INITIAL_STATE, {
  [Types.GET_EMPLOYEES_REQUEST]: getEmployeesRequest,
  [Types.GET_EMPLOYEES_SUCCESS]: getEmployeesSuccess,
  [Types.GET_EMPLOYEES_FAILURE]: getEmployeesFailure,
  [Types.POST_EMPLOYEE_REQUEST]: postEmployeeRequest,
  [Types.POST_EMPLOYEE_SUCCESS]: postEmployeeSuccess,
  [Types.POST_EMPLOYEE_FAILURE]: postEmployeeFailure,
  [Types.DELETE_EMPLOYEE_REQUEST]: deleteEmployeeRequest,
  [Types.DELETE_EMPLOYEE_SUCCESS]: deleteEmployeeSuccess,
  [Types.DELETE_EMPLOYEE_FAILURE]: deleteEmployeeFailure,
  [Types.UPDATE_EMPLOYEE_REQUEST]: updateEmployeeRequest,
  [Types.UPDATE_EMPLOYEE_SUCCESS]: updateEmployeeSuccess,
  [Types.UPDATE_EMPLOYEE_FAILURE]: updateEmployeeFailure,
});
