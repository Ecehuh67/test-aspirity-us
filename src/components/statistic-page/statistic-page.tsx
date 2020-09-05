import axios from 'axios';
import Filters from '../filters/filters';
import NewData from '../new-data/new-data';
import { generateKey, SERVER_URL, changeFilter } from '../../consts';
import { AppContext } from '../context-provider/context-provider';

const statisticPage: React.SFC = () => {
  const {
    userData,
    filteredData,
    setFilter,
    setUserData,
    filters,
  } = React.useContext(AppContext);
  const [popup, setPopup] = React.useState(null);
  const [editPoint, setEdit] = React.useState({ isEdit: false });

  React.useEffect(() => {
    setFilter(changeFilter(userData, filters));
  }, [userData]);

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
                      <button
                        className="controls-panel__item controls-panel__item--edit"
                        type="button"
                        onClick={() => {
                          setEdit((prev) => {
                            return {
                              ...point,
                              ...prev,
                              isEdit: true,
                            };
                          });
                          popup.current.classList.remove('visually-hidden');
                        }}
                      >
                        /
                      </button>
                      <button
                        className="controls-panel__item controls-panel__item--delete"
                        type="button"
                        onClick={() => {
                          axios.post(SERVER_URL, point).then((res) => {
                            setUserData(res.data);
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
              <button
                className="statistic-main__add-button"
                type="button"
                onClick={() => {
                  popup.current.classList.remove('visually-hidden');
                }}
              >
                &times;
              </button>
            </div>
          </div>
        </div>
      </section>
      <NewData cb={setPopup} editPoint={editPoint} resetEdit={setEdit} />
    </main>
  );
};

export default statisticPage;
