import { DATE_FILTERS, TYPES_FILTERS } from '../../consts';
import { UserData, ContextProps, NodeProps, Filters } from '../../ts-types';

// Create a context to use variables through entire App withoput making 'drilling props'
const AppContext = React.createContext<ContextProps | null>(null);

const ContextProvider = (props: NodeProps) => {
  const [userData, setUserData] = React.useState<UserData | []>([]);
  const [filteredData, setFilter] = React.useState<UserData | []>([]);

  // Create filters list to manipulate user's data
  const [filters, setFilters] = React.useState<Filters>({
    date: DATE_FILTERS[0],
    type: TYPES_FILTERS[0],
    distance: DATE_FILTERS[0],
  });

  const sampleAppContext: ContextProps = {
    userData,
    setUserData,
    filteredData,
    setFilter,
    filters,
    setFilters,
  };

  return (
    <AppContext.Provider value={sampleAppContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
export { AppContext };
