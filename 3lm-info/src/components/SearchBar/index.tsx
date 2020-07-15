import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { Container, Input } from "./styles";

const SearchBar: React.FC = () => {
  const [username, setUsername] = useState("");
  console.log(username);
  return (
    <Container>
      <GoSearch color="#a7a7a7" size="1.5rem" />
      <Input
        placeholder="Pesquise pelo nome..."
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </Container>
  );
};

export default SearchBar;
