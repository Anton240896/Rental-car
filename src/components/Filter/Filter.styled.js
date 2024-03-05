import styled from 'styled-components';
import { Form, Field } from 'formik';

export const ContainerForm = styled(Form)`
  display: flex;
  flex-direction: row;
  align-items: baseline;
  padding-top: 150px;
  padding-left: 100px;

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 30px;
    margin-left: 91px;
  }

  @media (min-width: 768px) and (max-width: 1220px) {
    flex-direction: column;
    margin-left: 348px;
    gap: 25px;
  }
`;

export const Label = styled.label`
  margin-left: 50px;
`;

export const OptionInput = styled(Field)`
  background-color: #d1fbff;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 224px;

  &:focus {
    outline: none;
    border: 1px solid blue;
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
  background-color: #d1fbff;
  margin-left: 4px;
  height: 44px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  width: 125px;

  &:focus {
    outline: none;
    border: 1px solid blue;
  }
`;
