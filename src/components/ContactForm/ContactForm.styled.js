import styled from 'styled-components';

export const Form = styled.form`
  border: 1px solid black;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 30px 30px 5px;
`;

export const Label = styled.label`
  color: #8d8d8d;
  margin: 10px 0;
  display: block;
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

export const Button = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: 1px solid transparent;
  border-radius: 10px;
  width: 100px;
  margin: 20px;
  padding: 5px;
  min-width: 90px;
  background-color: rgba(33, 33, 33, 0.2);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    background-color: skyblue;
  }
`;
