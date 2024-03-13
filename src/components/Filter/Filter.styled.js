import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContainerForm = styled(Form)`
  display: flex;
  gap: 10px;
  flex-direction: row;
  align-items: baseline;
  padding-top: 150px;
  padding-left: 39px;

  @media (max-width: 1220px) {
    flex-direction: column;
    margin-left: 91px;
    gap: 25px;
  }
`;

export const Label = styled.label`
  margin-left: 50px;
`;

export const OptionInput = styled(Field)`
  background-color: #3470ff;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 224px;
  color: white;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

export const Option = styled.option`
  &::placeholder {
    color: white;
  }
`;

export const Search = styled.button`
  width: 145px;
  height: 44px;
  border-radius: 12px;
  margin-top: 18px;
  border: none;
  background-color: #3470ff;
  color: white;
  cursor: pointer;

  &:hover {
    background-color: blue;
    transition: background-color 1s;
  }
`;

export const OptionPrice = styled(Field)`
  background-color: #3470ff;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 125px;
  color: white;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;

export const InputMileage = styled.input`
  background-color: #3470ff;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 125px;
  color: white;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }

  &::placeholder {
    color: white;
  }
`;
