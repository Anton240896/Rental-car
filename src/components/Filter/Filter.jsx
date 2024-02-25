import React, { useState, useEffect } from 'react';
import { Formik, Form, Field } from 'formik';
import axios from 'axios';
import makes from '../../JSON/makes.json';

export const Filter = ({ onFilterChange }) => {
  const [carMakes, setCarMakes] = useState([]);

  useEffect(() => {
    const fetchCarMakes = async () => {
      try {
        axios.get('../../JSON/makes.json');
        setCarMakes(makes);
      } catch (error) {
        console.error('Error fetching car makes:', error);
      }
    };

    fetchCarMakes();
  }, []);

  const handleSubmit = values => {
    onFilterChange(values);
  };

  return (
    <Formik
      initialValues={{ brand: '', price: '', mileage: '' }}
      onSubmit={handleSubmit}
    >
      <Form>
        <label>
          Car Brand
          <Field as="select" name="brand" placeholder="Select a brand">
            <option value="">Select a brand</option>
            {carMakes.map((make, index) => (
              <option key={index} value={make}>
                {make}
              </option>
            ))}
          </Field>
        </label>

        <label>
          Price/ 1 hour
          <Field type="text" name="price" />
        </label>
        <label>
          Car mileage/ km
          <Field type="text" name="mileage" />
        </label>
        <button type="submit">Search</button>
      </Form>
    </Formik>
  );
};
