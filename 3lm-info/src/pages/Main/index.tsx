import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "./styles";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import { RootState } from "../../store/ducks/rootReducer";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { employees, error, loading } = useSelector(
    (state: RootState) => state.employees
  );

  console.log(employees);
  useEffect(() => {
    function fetchEmployees() {
      dispatch(EmployeesActions.getEmployeesRequest());
    }

    fetchEmployees();
  }, []);

  return (
    <Container>
      <h1>Main</h1>
    </Container>
  );
};

export default Main;
