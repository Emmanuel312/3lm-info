import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 30rem;
  padding: 1rem;
  background: #fff;
  border-radius: 2rem;
`;

export const Input = styled.input`
  margin-left: 1rem;

  ::placeholder {
    font-weight: bold;
    color: #ccc;
  }
`;
