import React from 'react';
import { Formik, Form, Field } from 'formik';

export const Filter = ({ onFilterChange }) => {
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
          <Field type="text" name="brand" placeholder="Enter the text" />
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
