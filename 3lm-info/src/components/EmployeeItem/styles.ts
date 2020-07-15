import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  padding: 2rem;
  margin-bottom: 2rem;
  /* border-radius: 2rem; */
  box-shadow: 0 0.2rem 0.3rem 0 rgba(0, 0, 0, 0.2),
    0 0.3rem 1rem 0 rgba(0, 0, 0, 0.1);

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 2.5rem;

    object-fit: cover;
  }

  span {
    width: 20rem;
  }

  transition: background 1s;

  &:hover {
    background: #eee;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InfoTitle = styled.h2`
  font-size: 1rem;
  color: #ccc;
`;

export const InfoContent = styled.span`
  font-size: 1.5rem;
  color: #000;
`;

export const ActionButton = styled.button`
  width: 4rem;
  height: 4rem;
  margin-right: 3rem;
  border-radius: 2rem;
  transition: background 0.5s;
  transition: color 0.2s;

  &:hover {
    background: #ccc;
    color: #eee;
  }
`;
