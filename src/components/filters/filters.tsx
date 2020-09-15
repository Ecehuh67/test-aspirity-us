import Filter from '../filter/filter.connect';
import { DATE_FILTERS, TYPES_FILTERS } from '../../consts';
import { FiltersProps } from '../../ts-types';

const Filters: React.SFC<FiltersProps> = ({ filterData, filters }) => {
  // Make filters active to chose necessary category
  const [isDataFilterActive, setDataActive] = React.useState<boolean>(false);
  const [isTypeFilterActive, setTypeActive] = React.useState<boolean>(false);
  const [isDistanceFilterActive, setDistanceActive] = React.useState<boolean>(
    false
  );

  const filtersList = {
    date: {
      isActive: isDataFilterActive,
      setActive: setDataActive,
      types: DATE_FILTERS,
    },
    type: {
      isActive: isTypeFilterActive,
      setActive: setTypeActive,
      types: TYPES_FILTERS,
    },
    distance: {
      isActive: isDistanceFilterActive,
      setActive: setDistanceActive,
      types: DATE_FILTERS,
    },
  };

  React.useEffect(() => {
    filterData();
  }, [filters]);

  return (
    <>
      {Object.keys(filtersList).map((filter, i) => {
        console.log(filter);
        return (
          <li className="sorting-panel__item" key={`${filter}${i}`}>
            <Filter
              filterList={filtersList[filter].types}
              currentFilter={filter}
              isActive={filtersList[filter].isActive}
              setActive={filtersList[filter].setActive}
            />
          </li>
        );
      })}
    </>
  );
};

export default Filters;
