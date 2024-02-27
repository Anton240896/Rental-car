import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-top: 150px;
  padding-left: 100px;
`;

export const Label = styled.label`
  margin-left: 50px;
`;

export const OptionInput = styled(Field)`
  background-color: #f7f7fb;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 224px;

  &:focus {
    border: none;
  }
`;

export const Option = styled.option`
  height: 44px;
  border-radius: 12px;
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
  }
`;

export const OptionPrice = styled(Field)`
  background-color: #f7f7fb;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 125px;

  &:focus {
    border: none;
  }
`;
