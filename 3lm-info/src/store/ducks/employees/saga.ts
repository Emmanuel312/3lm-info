import { all, put, call, takeLatest } from "redux-saga/effects";
import { Types, Creators as EmployeesActions } from "./index";
import api from "../../../services/api";
import { IEmployee } from "../../../interfaces";
import { AxiosResponse } from "axios";

export function* getEmployees() {
  const { getEmployeesSuccess, getEmployeesFailure } = EmployeesActions;

  try {
    const response: AxiosResponse<IEmployee[]> = yield call(
      api.get,
      "/employee"
    );
    console.log(response.data);
    yield put(getEmployeesSuccess(response.data));
  } catch (error) {
    yield put(getEmployeesFailure());
  }
}

export function* deleteEmployee(action: any) {
  const { deleteEmployeeSuccess, deleteEmployeeFailure } = EmployeesActions;

  try {
    yield call(api.delete, `/employee/${action.id}`);
    yield put(deleteEmployeeSuccess(action.id));
  } catch (error) {
    yield put(deleteEmployeeFailure());
  }
}

export function* postEmployee(action: any) {
  const { postEmployeeSuccess, postEmployeeFailure } = EmployeesActions;
  const { dateOfBirth, officeId, lastName, name, salary } = action.employee;
  try {
    const response: AxiosResponse<IEmployee> = yield call(
      api.post,
      "/employee",
      {
        dateOfBirth,
        officeId,
        lastName,
        name,
        salary,
      }
    );
    yield put(postEmployeeSuccess(response.data));
  } catch (error) {
    console.log(error);
    yield put(postEmployeeFailure());
  }
}

// faz a conexão dos tipos com o saga responsavel
export default all([
  takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees),
  takeLatest(Types.DELETE_EMPLOYEE_REQUEST, deleteEmployee),
  takeLatest(Types.POST_EMPLOYEE_REQUEST, postEmployee),
]);
