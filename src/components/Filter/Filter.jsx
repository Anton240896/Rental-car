import React, { useState, useEffect } from 'react';
import { Formik } from 'formik';
import axios from 'axios';
import makes from '../JSON/makes.json';
import {
  ContainerForm,
  OptionInput,
  Label,
  Search,
  OptionPrice,
  InputMileage,
  Option,
} from './Filter.styled';

export const Filter = ({ onFilterChange }) => {
  const [carMakes, setCarMakes] = useState([]);

  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        axios.get('https://65d8a715c96fbb24c1bc0564.mockapi.io/carAdvert/cars');
        setCarMakes(makes);
      } catch (error) {
        console.error('Error', error);
      }
    };

    fetchCarMakes();
  }, []);

  const handleSubmit = values => {
    onFilterChange(values);
  };

  const PriceFilter = () => {
    const options = [];
    for (let i = 30; i <= 80; i += 10) {
      options.push(
        <option key={i} value={i}>
          {i}
        </option>
      );
    }
    return options;
  };

  return (
    <Formik
      initialValues={{ brand: '', price: '', mileage: '' }}
      onSubmit={handleSubmit}
    >
      <ContainerForm>
        <Label>Car Brand</Label>
        <OptionInput as="select" name="car brand">
          <Option>Select all</Option>
          {carMakes.map((make, index) => (
            <option key={index} value={make}>
              {make}
            </option>
          ))}
        </OptionInput>

        <Label>Price/ 1 hour</Label>
        <OptionPrice as="select" name="price">
          <Option value="">All price </Option>
          {PriceFilter()}
        </OptionPrice>

        <Label>Car mileage/ km</Label>
        <InputMileage type="text" name="to" placeholder="To" />
        <InputMileage type="text" name="from" placeholder="From" />

        <Search type="submit">Search</Search>
      </ContainerForm>
    </Formik>
  );
};
