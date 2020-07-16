import React, { useState, FormEvent, ChangeEvent, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import { RootState } from "../../store/ducks/rootReducer";
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
import { IEmployeeInput, IOffice } from "../../interfaces";
import { Creators as EmployeesActions } from "../../store/ducks/employees";
import api from "../../services/api";
import { AxiosResponse } from "axios";
import { parseISO } from "date-fns/esm";

const AddEmployee: React.FC = () => {
  const [inputs, setInputs] = useState<IEmployeeInput>({} as IEmployeeInput);
  const [offices, setOffices] = useState<IOffice[]>([]);
  const { loading, error } = useSelector((state: RootState) => state.employees);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchOffices() {
      try {
        const response: AxiosResponse<IOffice[]> = await api.get("office");
        setOffices(response.data);
      } catch (error) {
        toast.error("Algo deu errado, tente novamente");
      }
    }

    fetchOffices();
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
      salary: Number(inputs.salary),
      dateOfBirth: new Date(inputs.dateOfBirth).toString(),
    };
    console.log(inputsFormatted);
    dispatch(EmployeesActions.postEmployeeRequest(inputsFormatted));
  }
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  }

  return (
    <Container>
      <Card>
        <Title>Sobre o novo funcionário</Title>
        <form onSubmit={handleSubmit}>
          <Sentence>
            <Text>O primeiro nome dele é </Text>
            <Input
              onChange={handleChange}
              name="name"
              placeholder="PRIMEIRO NOME"
            />
            <Text>e o sobrenome é </Text>
          </Sentence>

          <Sentence>
            <Input
              onChange={handleChange}
              name="lastName"
              placeholder="SOBRENOME"
            />
            <Text>. A data de nascimento é </Text>
            <Input
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
              type="number"
              step="0.01"
              onChange={handleChange}
              name="salary"
              placeholder="SALARIO"
            />
            <Text>.</Text>
            <Button type="submit">Adicionar</Button>
          </Sentence>
        </form>
      </Card>
      <ToastContainer />
    </Container>
  );
};

export default AddEmployee;
