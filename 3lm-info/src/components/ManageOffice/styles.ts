import styled from "styled-components";

export const Container = styled.div`
  background: #fff;
  height: 45rem;
  width: 25vw;
  padding: 2rem;
  box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.2),
    0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);

  h1 {
    margin: 1rem 0;
    font-weight: 300;
  }
`;

export const AddNewOfficeInput = styled.input`
  height: 3rem;
  align-self: center;
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 1.5rem;
  padding: 0 2rem;
`;
