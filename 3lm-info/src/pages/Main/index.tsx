import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, InfoTitle, Header, EmployeesList } from "./styles";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import { RootState } from "../../store/ducks/rootReducer";
import SearchBar from "../../components/SearchBar";
import EmployeeItem from "../../components/EmployeeItem";
import AppBar from "../../components/AppBar";

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { employees, error, loading } = useSelector(
    (state: RootState) => state.employees
  );
  const quantity = useMemo(() => employees.length, [employees]);

  useEffect(() => {
    function fetchEmployees() {
      dispatch(EmployeesActions.getEmployeesRequest());
    }

    fetchEmployees();
  }, []);

  return (
    <Container>
      <AppBar />

      <Card>
        <Header>
          <InfoTitle>{`Você possui ${quantity} funcionários no total`}</InfoTitle>
          <SearchBar />
        </Header>

        <EmployeesList>
          {employees.map((employee) => (
            <EmployeeItem employee={employee} />
          ))}
        </EmployeesList>
      </Card>
    </Container>
  );
};

export default Main;
