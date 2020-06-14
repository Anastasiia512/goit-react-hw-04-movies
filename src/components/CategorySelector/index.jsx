import React from 'react';
import Select from 'react-select';

const CategorySelector = ({ options, value, onChange }) => (
  <Select
    className="basic-single"
    value={value}
    onChange={onChange}
    isClearable
    options={options}
  ></Select>
);

export default CategorySelector;
