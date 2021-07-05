import { useQuery } from '@apollo/client';
import { GET_COUNTRIES_LIST } from '../Apollo/queries';
import { CountryItem } from './CountryItem';

export const CountriesList = () => {
  const { loading, data: countriesList } = useQuery(GET_COUNTRIES_LIST);

  console.log(countriesList);
  if (loading) {
    return (
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row shadow-lg p-3 mb-5 bg-white rounded">
        {countriesList
          ? countriesList.countries.map((c) => (
              <CountryItem data={c} key={c.id + Math.random()} />
            ))
          : 'No data'}
      </div>
    </div>
  );
};
