import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, InfoTitle, Header, EmployeesList } from "./styles";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import { RootState } from "../../store/ducks/rootReducer";
import SearchBar from "../../components/SearchBar";
import EmployeeItem from "../../components/EmployeeItem";
import AppBar from "../../components/AppBar";
import { ToastContainer, toast } from "react-toastify";
const Main: React.FC = () => {
  const dispatch = useDispatch();
  const { employees, error, loading } = useSelector(
    (state: RootState) => state.employees
  );
  const quantity = useMemo(() => employees.length, [employees]);

  useEffect(() => {
    if (error) {
      toast.error("Algo deu errado, tente novamente");
    }
  }, [error]);

  useEffect(() => {
    function fetchEmployees() {
      dispatch(EmployeesActions.getEmployeesRequest());
    }

    fetchEmployees();
  }, [dispatch]);

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
      <ToastContainer />
    </Container>
  );
};

export default Main;
