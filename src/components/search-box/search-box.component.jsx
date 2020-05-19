import React from 'react';

import './search-box.styles.css';

const SearchBox = ({ placeholder, onChange }) => {
  return (
  <input
    className='search'
    onChange = {onChange}
    type='search'
    placeholder={placeholder}
  />
  )
}

export default SearchBox;
