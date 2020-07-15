import React from "react";
import { useDispatch } from "react-redux";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import {
  Container,
  Info,
  InfoContent,
  InfoTitle,
  ActionButton,
} from "./styles";
import { IEmployee } from "../../interfaces";
import { Creators as EmployeeCreators } from "../../store/ducks/employees";
import { parseISO, format } from "date-fns";
import { formatSalary } from "../../utils";

interface Props {
  employee: IEmployee;
}

const EmployeeItem: React.FC<Props> = ({ employee }) => {
  const { _id, dateOfBirth, lastName, name, officeId, salary } = employee;
  const dateOfBirthFormatted = format(parseISO(dateOfBirth), "dd/MM/yyyy");
  const salaryFormatted = formatSalary(salary);

  const dispatch = useDispatch();
  const { deleteEmployeeRequest } = EmployeeCreators;

  function handleEdit() {
    console.log("edit");
  }

  function handleDelete() {
    dispatch(deleteEmployeeRequest(_id));
  }

  return (
    <Container key={_id}>
      <img src="https://specials-images.forbesimg.com/imageserve/5d3d7a55f1176b000897d627/960x0.jpg?fit=scale"></img>
      <Info>
        <InfoTitle>Nome</InfoTitle>
        <InfoContent>{name}</InfoContent>
      </Info>

      <Info>
        <InfoTitle>Sobrenome</InfoTitle>
        <InfoContent>{lastName}</InfoContent>
      </Info>

      <Info>
        <InfoTitle>Cargo</InfoTitle>
        <InfoContent>{officeId.description}</InfoContent>
      </Info>

      <Info>
        <InfoTitle>Data de nascimento</InfoTitle>
        <InfoContent>{dateOfBirthFormatted}</InfoContent>
      </Info>

      <Info>
        <InfoTitle>Salario</InfoTitle>
        <InfoContent>{salaryFormatted}</InfoContent>
      </Info>

      <ActionButton onClick={handleEdit}>
        <AiOutlineEdit size="2rem" />
      </ActionButton>

      <ActionButton onClick={handleDelete}>
        <AiOutlineDelete size="2rem" color="#a64452" />
      </ActionButton>
    </Container>
  );
};

export default EmployeeItem;
