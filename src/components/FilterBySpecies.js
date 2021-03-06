import React from 'react';
import '../stylesheets/FilterBySpecies.scss';

const FilterBySpecies = (props) => {
  const handleChange = (ev) => {
    props.handleFilter({
      value: ev.target.value,
      key: 'species',
    });
  };
  return (
    <>
      <label className='form__label' htmlFor='species'>
        Species:
      </label>

      <select
        className='form__select'
        name='species'
        id='species'
        onChange={handleChange}
        value={props.speciesFilter}
      >
        <option value='all'>All</option>
        <option value='Human'>Human</option>
        <option value='Alien'>Alien</option>
      </select>
    </>
  );
};

export default FilterBySpecies;
