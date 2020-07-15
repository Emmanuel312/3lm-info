import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f2f3f4;
  height: 100%;
`;

export const Card = styled.div`
  flex-grow: 1;
  background: #fff;
  width: 80%;
  border-radius: 2rem;
  padding: 3rem 2rem;
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #000;
  margin-bottom: 3rem;
  font-weight: 300;
`;
export const Sentence = styled.div`
  margin-bottom: 3rem;
`;
export const Text = styled.strong`
  font-size: 1.5rem;
  color: #ccc;
  font-weight: 500;
`;
export const Input = styled.input`
  height: 5rem;
  background: #eee;
  padding: 1rem;
  border-radius: 2.5rem;
  margin: 0 2rem;
`;
