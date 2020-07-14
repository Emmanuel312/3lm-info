import { all, put, call, takeLatest } from "redux-saga/effects";
import { Types, Creators as EmployeesActions } from "./index";

export function* getEmployees() {
  const { getEmployeesSuccess, getEmployeesFailure } = EmployeesActions;

  try {
    yield put(
      getEmployeesSuccess([
        {
          id: 1,
          name: "Emmanuel",
          lastName: "Nery",
          officeId: 1,
          dateOfBirth: "1996-12-03T16:00:00Z",
          salary: 12000.45,
        },
        {
          id: 2,
          name: "Tiago",
          lastName: "Fonseca",
          officeId: 1,
          dateOfBirth: "1998-03-15T16:00:00Z",
          salary: 3900.54,
        },
        {
          id: 3,
          name: "José",
          lastName: "Aragão",
          officeId: 2,
          dateOfBirth: "1990-02-20T16:00:00Z",
          salary: 3960.54,
        },
      ])
    );
  } catch (error) {
    yield put(getEmployeesFailure());
  }
}

// faz a conexão dos tipos com o saga responsavel
export default all([takeLatest(Types.GET_EMPLOYEES_REQUEST, getEmployees)]);
