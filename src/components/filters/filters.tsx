import Filter from '../filter/filter';
import { AppContext } from '../context-provider/context-provider';
import {
  changeFilter,
  DATE_FILTERS,
  TYPES_FILTERS,
  TYPES_OF_SORTING,
} from '../../consts';
import { Filters } from '../../ts-types';

const Filters: React.SFC = () => {
  const { userData, setFilter } = React.useContext(AppContext);

  // Create filters list to manipulate user's data
  const [filters, setFilters] = React.useState<Filters>({
    date: DATE_FILTERS[0],
    type: TYPES_FILTERS[0],
    distance: DATE_FILTERS[0],
  });

  // Make filters active to chose necessary category
  const [isDataFilterActive, setDataActive] = React.useState<boolean>(false);
  const [isTypeFilterActive, setTypeActive] = React.useState<boolean>(false);
  const [isDistanceFilterActive, setDistanceActive] = React.useState<boolean>(
    false
  );

  const resetFilter = (filter) => {
    setFilters((prev) => {
      return {
        ...prev,
        [filter]: 'All',
      };
    });
  };

  React.useEffect(() => {
    setFilter(changeFilter(userData, filters));
  }, [filters]);

  const generateFilterComponent = (
    filterList,
    activeFilters,
    currentFilter,
    setNewFilter,
    isActive,
    setActive,
    resetCurrentFilter
  ) => {
    return TYPES_OF_SORTING.map((el) => {
      return (
        <Filter
          filterList={filterList}
          activeFilters={activeFilters}
          currentFilter={el}
          setNewFilter={setNewFilter}
          isActive={isActive}
          setActive={setActive}
          resetCurrentFilter={resetCurrentFilter}
        />
      );
    });
  };

  return (
    <>
      <Filter
        filterList={DATE_FILTERS}
        activeFilters={filters}
        currentFilter={'date'}
        setNewFilter={setFilters}
        isActive={isDataFilterActive}
        setActive={setDataActive}
        resetCurrentFilter={resetFilter}
      />

      <Filter
        filterList={TYPES_FILTERS}
        activeFilters={filters}
        currentFilter={'type'}
        setNewFilter={setFilters}
        isActive={isTypeFilterActive}
        setActive={setTypeActive}
        resetCurrentFilter={resetFilter}
      />

      <Filter
        filterList={DATE_FILTERS}
        activeFilters={filters}
        currentFilter={'distance'}
        setNewFilter={setFilters}
        isActive={isDistanceFilterActive}
        setActive={setDistanceActive}
        resetCurrentFilter={resetFilter}
      />
    </>
  );
};

export default Filters;
