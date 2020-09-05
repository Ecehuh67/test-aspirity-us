import Filter from '../filter/filter';
import { AppContext } from '../context-provider/context-provider';
import { changeFilter, DATE_FILTERS, TYPES_FILTERS } from '../../consts';

const Filters: React.SFC = () => {
  const { userData, setFilter, filters, setFilters } = React.useContext(
    AppContext
  );

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

  return (
    <>
      <Filter
        filterList={DATE_FILTERS}
        activeFilters={filters}
        currentFilter="date"
        setNewFilter={setFilters}
        isActive={isDataFilterActive}
        setActive={setDataActive}
        resetCurrentFilter={resetFilter}
      />

      <Filter
        filterList={TYPES_FILTERS}
        activeFilters={filters}
        currentFilter="type"
        setNewFilter={setFilters}
        isActive={isTypeFilterActive}
        setActive={setTypeActive}
        resetCurrentFilter={resetFilter}
      />

      <Filter
        filterList={DATE_FILTERS}
        activeFilters={filters}
        currentFilter="distance"
        setNewFilter={setFilters}
        isActive={isDistanceFilterActive}
        setActive={setDistanceActive}
        resetCurrentFilter={resetFilter}
      />
    </>
  );
};

export default Filters;
