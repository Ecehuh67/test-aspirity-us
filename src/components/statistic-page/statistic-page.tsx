import axios from 'axios';
import Filters from '../filters/filters';
import { generateKey, SERVER_URL } from '../../consts';
import { AppContext } from '../context-provider/context-provider';

const statisticPage: React.SFC = () => {
  const { userData, filteredData, setFilter } = React.useContext(AppContext);

  React.useEffect(() => {
    setFilter(userData);
  }, userData);

  return (
    <main className="html-wrapper main statistic-main">
      <section className="statistic-main__section">
        <h1 className="visually-hidden">Total statistic</h1>
        <div className="statistic-main__sorting">
          <h2 className="visually-hidden">Sorting panel</h2>
          <span className="statistic-main__sorting-title">Sorting</span>
          <ul className="statistic-main__sorting-panel sorting-panel">
            <Filters />
          </ul>
        </div>
        <div className="statistic-main__table">
          <div className="statistic-main__table-head">
            <ul className="statistic-main__table-colums table-colums">
              <li className="table-colums__item">Date</li>
              <li className="table-colums__item">Type of training</li>
              <li className="table-colums__item">Distance, km</li>
            </ul>
          </div>
          <div className="statistic-main__table-body">
            <ul className="statistic-main__table-rows table-row">
              {filteredData.map((point, i) => {
                return (
                  <li
                    className={`table-row__item ${
                      (i + 1) % 2 > 0 ? 'table-row__item--count' : ''
                    }`}
                    key={generateKey(i)}
                  >
                    <ul className="table-row__item-content row-content">
                      <li className="row-content__item table-colums__item">
                        {point.date}
                      </li>
                      <li className="row-content__item table-colums__item">
                        {point.type}
                      </li>
                      <li className="row-content__item table-colums__item">
                        {point.distance}
                      </li>
                    </ul>
                    <div
                      className={`table-row__item-controls controls-panel ${
                        (i + 1) % 2 > 0 ? 'controls-panel--count' : ''
                      }`}
                    >
                      <button className="controls-panel__item controls-panel__item--edit">
                        /
                      </button>
                      <button
                        className="controls-panel__item controls-panel__item--delete"
                        onClick={() => {
                          axios.post(SERVER_URL, point).then((res) => {
                            setFilter(res.data);
                          });
                        }}
                      >
                        &times;
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>

            <div className="statistic-main__add-container">
              <button className="statistic-main__add-button">&times;</button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default statisticPage;
