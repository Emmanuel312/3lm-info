/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../store/ducks/rootReducer";
import { useHistory, useLocation } from "react-router-dom";
import {
  Container,
  Title,
  Sentence,
  Text,
  Input,
  Card,
  Select,
  Button,
} from "./styles";
import { IEmployeeInput, IOffice, IEmployee } from "../../interfaces";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import api from "../../services/api";
import { AxiosResponse } from "axios";

const ManageEmployee: React.FC = () => {
  const location = useLocation();
  const history = useHistory();
  const [inputs, setInputs] = useState<IEmployeeInput>({} as IEmployeeInput);
  const [offices, setOffices] = useState<IOffice[]>([]);
  const { loading, error } = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();
  const searchParams = new URLSearchParams(location.search);

  useEffect(() => {
    async function fetchOffices() {
      try {
        const response: AxiosResponse<IOffice[]> = await api.get("office");
        setOffices(response.data);
        setInputs({ ...inputs, officeId: response.data[0]?._id });
      } catch (error) {
        toast.error("Algo deu errado, tente novamente");
      }
    }

    async function fetchEmployee() {
      const action = searchParams.get("action");
      const _id = searchParams.get("_id");

      if (action === "edit") {
        const { data }: AxiosResponse<IEmployee> = await api.get(
          `employee/${_id}`
        );

        setInputs({
          name: data.name,
          lastName: data.lastName,
          officeId: data.officeId._id,
          dateOfBirth: data.dateOfBirth,
          salary: String(data.salary),
        });
      }
    }

    fetchOffices();
    fetchEmployee();
  }, []);

  useEffect(() => {
    if (error) {
      toast.error("Algo deu errado, tente novamente");
    }
  }, [error]);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();

    const inputsFormatted: IEmployeeInput = {
      ...inputs,
      dateOfBirth: new Date(inputs.dateOfBirth).toString(),
    };

    dispatch(EmployeesActions.postEmployeeRequest(inputsFormatted));
    history.goBack();
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Card>
        <Title>Sobre o funcionário</Title>
        <form onSubmit={handleSubmit}>
          <Sentence>
            <Text>O primeiro nome dele é </Text>
            <Input
              value={inputs.name}
              onChange={handleChange}
              name="name"
              placeholder="PRIMEIRO NOME"
            />
            <Text>e o sobrenome é </Text>
          </Sentence>

          <Sentence>
            <Input
              value={inputs.lastName}
              onChange={handleChange}
              name="lastName"
              placeholder="SOBRENOME"
            />
            <Text>. A data de nascimento é </Text>
            <Input
              value={inputs.dateOfBirth}
              type="date"
              onChange={handleChange}
              name="dateOfBirth"
              placeholder="DATA DE NASCIMENTO"
            />
          </Sentence>

          <Sentence>
            <Text>. Trabalhando no cargo de </Text>
            <Select
              onChange={(e) =>
                setInputs({ ...inputs, officeId: e.target.value })
              }
              name="officeId"
              value={inputs.officeId}
            >
              {offices?.map((office) => (
                <option value={office._id}>{office.description}</option>
              ))}
            </Select>
            <Text>receberá um salario de </Text>
            <Input
              value={inputs.salary}
              onChange={handleChange}
              step="any"
              name="salary"
              placeholder="SALARIO"
            />
            <Text>.</Text>
            <Button type="submit">Enviar</Button>
          </Sentence>
        </form>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default ManageEmployee;
