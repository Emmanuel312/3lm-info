/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  InfoTitle,
  Header,
  EmployeesList,
  Content,
} from "./styles";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import { RootState } from "../../store/ducks/rootReducer";
import EmployeeItem from "../../components/EmployeeItem";
import AppBar from "../../components/AppBar";
import { ToastContainer, toast } from "react-toastify";
import Skeleton from "react-loading-skeleton";
import ManageOffice from "../../components/ManageOffice";

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
  }, []);

  return (
    <Container>
      <AppBar />

      <Card>
        <Header>
          <InfoTitle>{`Você possui ${quantity} funcionários no total`}</InfoTitle>
        </Header>
        <Content>
          {loading ? (
            <Skeleton height="8rem" duration={3} count={5}></Skeleton>
          ) : (
            <EmployeesList>
              {employees.map((employee) => (
                <EmployeeItem employee={employee} />
              ))}
            </EmployeesList>
          )}
          <ManageOffice></ManageOffice>
        </Content>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default Main;
