import React, { useState } from "react";
import { Container, Input, ActionButton } from "./styles";
import { IOffice } from "../../interfaces";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import api from "../../services/api";
import { AxiosResponse } from "axios";
interface Props {
  office: IOffice;
  // função que avisa ao pai que a ação foi executada com sucesso
  handleDelete(_id: string): void;
  handleUpdate(office: IOffice): void;
}

const OfficeItem: React.FC<Props> = ({
  office,
  handleDelete,
  handleUpdate,
}) => {
  const [description, setDesctiption] = useState(office?.description);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleDeleteOffice() {
    try {
      setError(false);
      setLoading(true);

      await api.delete(`office/${office._id}`);

      handleDelete(office._id);
      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  async function handleUpdateOffice() {
    try {
      setError(false);
      setLoading(true);

      const response: AxiosResponse<IOffice> = await api.put(
        `office/${office._id}`,
        { description }
      );

      handleUpdate(response.data);

      setLoading(false);
    } catch (err) {
      setError(true);
      setLoading(false);
    }
  }

  return (
    <Container>
      <Input
        value={description}
        onChange={(e) => setDesctiption(e.target.value)}
      />

      <ActionButton onClick={handleUpdateOffice}>
        <AiOutlineEdit />
      </ActionButton>

      <ActionButton onClick={handleDeleteOffice}>
        <AiOutlineDelete />
      </ActionButton>
    </Container>
  );
};

export default OfficeItem;
