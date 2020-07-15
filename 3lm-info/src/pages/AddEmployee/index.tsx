import React, { useState, FormEvent, ChangeEvent } from "react";

import { Container, Title, Sentence, Text, Input, Card } from "./styles";
import { IEmployeeInput } from "../../interfaces";

const AddEmployee: React.FC = () => {
  const [inputs, setInputs] = useState<IEmployeeInput>({} as IEmployeeInput);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    console.log(inputs);
  }
  function handleChange(e: any) {
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
              onChange={handleChange}
              name="dateOfBirth"
              placeholder="DATA DE NASCIMENTO"
            />
          </Sentence>

          <Sentence>
            <Text>. Trabalhando no cargo de </Text>
            <Input
              onChange={handleChange}
              name="officeId"
              placeholder="CARGO"
            />
            <Text>receberá um salario de </Text>
            <Input
              onChange={handleChange}
              name="salary"
              placeholder="SALARIO"
            />
            <Text>.</Text>
          </Sentence>

          <button type="submit">enviar</button>
        </form>
      </Card>
    </Container>
  );
};

export default AddEmployee;
