import { all, put, call, takeLatest } from "redux-saga/effects";
import { Types, Creators as EmployeesActions } from "./index";
import api from "../../../services/api";

export function* getEmployees() {
  const { getEmployeesSuccess, getEmployeesFailure } = EmployeesActions;

  try {
    const response = yield call(api.get, "/employee");
    console.log(response.data);
    yield put(getEmployeesSuccess(response.data));
  } catch (error) {
    yield put(getEmployeesFailure());
  }
}

export function* deleteEmployee(action: any) {
  console.log(action);
  const { deleteEmployeeSuccess, deleteEmployeeFailure } = EmployeesActions;

  try {
    yield call(api.delete, `/employee/${action.id}`);
    yield put(deleteEmployeeSuccess(action.id));
  } catch (error) {
    console.log(error);
    yield put(deleteEmployeeFailure());
  }
}

// faz a conexão dos tipos com o saga responsavel
export default all([
  takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees),
  takeLatest(Types.DELETE_EMPLOYEE_REQUEST, deleteEmployee),
]);
