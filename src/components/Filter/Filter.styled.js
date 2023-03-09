import styled from 'styled-components';

export const Label = styled.label`
  color: #8d8d8d;
  margin: 10px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 5px;
  font-size: 20px;
  gap: 10px;
`;

export const Input = styled.input`
  margin-left: 10px;
  width: 250px;
  font-size: 14px;
  border: 1px solid rgba(33, 33, 33, 0.2);
  border-radius: 4px;
  background-color: transparent;
  padding: 5px;
  outline: none;
  transition: border-color 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:focus {
    border-color: black;
  }
`;
