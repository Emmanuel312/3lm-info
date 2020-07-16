import React, { useEffect, useState, ChangeEvent, KeyboardEvent } from "react";
import { Container, AddNewOfficeInput } from "./styles";
import { AxiosResponse } from "axios";
import { IOffice } from "../../interfaces";
import api from "../../services/api";
import OfficeItem from "../OfficeItem";

const ManageOffice: React.FC = () => {
  const [offices, setOffices] = useState<IOffice[]>([]);
  const [newOffice, setNewOffice] = useState("");

  useEffect(() => {
    async function fetchOffices() {
      try {
        const response: AxiosResponse<IOffice[]> = await api.get("office");
        setOffices(response.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchOffices();
  }, []);

  function handleDelete(_id: string) {
    setOffices(offices.filter((office) => office._id !== _id));
  }

  function handleUpdate(officeUpdated: IOffice) {
    setOffices(
      offices.map((office) =>
        office._id === officeUpdated._id ? officeUpdated : office
      )
    );
  }

  async function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setNewOffice(e.target.value);
  }

  async function handleAddNewOffice(e: KeyboardEvent<HTMLInputElement>) {
    try {
      if (newOffice && e.key === "Enter") {
        const response: AxiosResponse<IOffice> = await api.post("office", {
          description: newOffice,
        });
        setOffices([response.data, ...offices]);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <Container>
      <AddNewOfficeInput
        onKeyPress={handleAddNewOffice}
        value={newOffice}
        onChange={handleOnChange}
        placeholder="Adicione mais cargos!!!"
      />

      <h1>Cargos</h1>
      {offices?.map((office) => (
        <OfficeItem
          key={office._id}
          handleDelete={handleDelete}
          handleUpdate={handleUpdate}
          office={office}
        />
      ))}
    </Container>
  );
};

export default ManageOffice;
