export const CountryItem = ({ data }) => {
  const { name, id, population, currencies, languages, capital } = data;
  return (
    <div className="col-sm-6 shadow-lg p-3 mb-5 bg-white rounded">
      <div className="card " style={{ width: 500 }}>
        <div className="card-body">
          <h3 className="card-body">{name}</h3>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            Population: <span className="font-weight-bold">{population}</span>
          </li>
          {capital ? (
            <>
              {' '}
              <li className="list-group-item">
                Capital:{' '}
                <span className="font-weight-bold">{capital.name}</span>
              </li>
              <li className="list-group-item">
                Capital population:{' '}
                <span className="font-weight-bold">{capital.population}</span>
              </li>{' '}
            </>
          ) : (
            ''
          )}

          <li className="list-group-item">
            Currencies:{' '}
            <span className="font-weight-bold">
              {currencies.map((c) => {
                return <span key={c.name}> {c.name} </span>;
              })}
            </span>
          </li>

          <li className="list-group-item">
            <span className="font-weight-bold">Languages:</span>
            <ul className="list-group list-group-flush">
              {' '}
              {languages.map((l) => (
                <li className="list-group-item" key={Math.random()}>
                  {l.name}
                </li>
              ))}
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
};
