import React from 'react';
import { nanoid } from 'nanoid';
import { Input, LabelDescr } from './Filter.styled';
import PropTypes from 'prop-types';

const Filter = ({ filterValue, onChange }) => {
  const filterInputId = nanoid();

  return (
    <LabelDescr htmlFor={filterInputId}>
      find contacts by name
      <Input
        type="text"
        value={filterValue}
        id={filterInputId}
        onChange={onChange}
      />
    </LabelDescr>
  );
};

export default Filter;

Filter.propTypes = {
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
