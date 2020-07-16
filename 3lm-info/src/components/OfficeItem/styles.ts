import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  padding: 0 2rem;
  align-items: center;
  /* background: #eee; */
  height: 5rem;
  width: 100%;
  margin-bottom: 2rem;
  box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.2),
    0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);
`;

export const Input = styled.input`
  background: #eee;
  height: 3rem;
  border-radius: 1.5rem;
  padding: 0 1rem;
`;

export const ActionButton = styled.button`
  margin-left: 1.5rem;
`;
