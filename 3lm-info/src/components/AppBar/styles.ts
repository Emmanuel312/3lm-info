import styled from "styled-components";
import { darken } from "polished";
import { Link } from "react-router-dom";
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  border-bottom: 2px solid #eee;
  background: #fff;
  height: 8rem;
  padding: 2rem;
`;

export const Logo = styled.img`
  width: 10rem;
  height: 5rem;
  object-fit: contain;
`;

export const AddNewEmployeeButton = styled(Link)`
  height: 4rem;
  display: flex;
  align-items: center;
  background: #52e88f;
  border-radius: 2rem;
  padding: 0 2rem;
  transition: background 1s;
  color: #fff;
  font-size: 1.5rem;
  font-weight: bold;

  &:hover {
    background: ${darken(0.2, "#52e88f")};
  }
`;
