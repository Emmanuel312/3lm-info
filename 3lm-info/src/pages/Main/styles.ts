import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5rem;
`;

export const Card = styled.div`
  flex-grow: 1;
  /* background: #fff; */
  border-radius: 2rem;
  padding: 3rem 2rem;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  margin-bottom: 5rem;
`;

export const InfoTitle = styled.h2`
  font-size: 1.8rem;
  color: #000;
`;

export const EmployeesList = styled.ul`
  width: 70vw;
`;
