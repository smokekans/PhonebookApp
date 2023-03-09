import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  text-align: center;
  text-transform: uppercase;
  padding: 2px;
`;

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 3px;
  margin-left: 10px;
  background-color: rgba(33, 33, 33, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;
