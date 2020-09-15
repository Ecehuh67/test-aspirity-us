import { FilterProps } from '../../ts-types';

const Filter: React.SFC<FilterProps> = ({
  filterList,
  activeFilters,
  currentFilter,
  setFilters,
  isActive,
  setActive,
  resetFilter,
}) => {
  return (
    <>
      <div className="sorting-panel__item-wrapper">
        <button
          className="sorting-panel__item-controls sorting-panel__item-controls--back sorting-panel__item-controls--hidden"
          type="button"
          onClick={() => {
            let index = filterList.indexOf(activeFilters[currentFilter]);

            if (index === filterList.length - 1) {
              index = 0;
            } else {
              index += 1;
            }

            setFilters({
              [currentFilter]: filterList[index],
            });
          }}
        >
          forward
        </button>
        <button
          className="sorting-panel__item-controls sorting-panel__item-controls--forward sorting-panel__item-controls--hidden"
          type="button"
          onClick={() => {
            let index = filterList.indexOf(activeFilters[currentFilter]);

            if (index === 0) {
              index = filterList.length - 1;
            } else {
              index -= 1;
            }

            setFilters({
              [currentFilter]: filterList[index],
            });
          }}
        >
          back
        </button>
        <button
          className="sorting-panel__item-button"
          type="button"
          onClick={(evt) => {
            const element = evt.currentTarget;
            const controls = Array.from(element.parentElement.children).slice(
              0,
              2
            );
            setActive(!isActive);
            if (isActive) {
              controls.forEach((el) => {
                el.classList.add('sorting-panel__item-controls--hidden');
              });
              resetFilter(currentFilter);
            } else {
              controls.forEach((el) => {
                el.classList.remove('sorting-panel__item-controls--hidden');
              });
            }
          }}
        >
          {!isActive ? currentFilter : activeFilters[currentFilter]}
        </button>
      </div>
    </>
  );
};

export default Filter;
