import { useState } from 'react';
import { useQuery } from '@apollo/client';

import { GET_COUNTRY_BY_NAME } from '../Apollo/queries';
import { CountryItem } from './CountryItem';

export const Search = () => {
  const [value, setValue] = useState('');
  const [searchValue, setSeachValue] = useState('');
  const { loading, data: countrieData } = useQuery(GET_COUNTRY_BY_NAME, {
    variables: { name: searchValue },
  });

  const inputHandle = (e) => {
    setValue(e.target.value);
  };

  const buttonHandler = () => {
    setSeachValue(value);
  };

  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div>
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Country"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={inputHandle}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={buttonHandler}
        >
          Search
        </button>
      </div>
      <div>
        {countrieData && countrieData?.countries
          ? countrieData.countries.map((c) => {
              return <CountryItem data={c} key={c.id + Math.random()} />;
            })
          : 'No data'}
      </div>
    </div>
  );
};
