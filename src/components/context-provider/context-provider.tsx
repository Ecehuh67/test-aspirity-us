import { UserData, ContextProps, NodeProps } from '../../ts-types';

// Create a context to use variables through entire App withoput making 'drilling props'
const AppContext = React.createContext<ContextProps | null>(null);

const ContextProvider = (props: NodeProps) => {
  // data for manipulating condition inside the application
  const [userData, setUserData] = React.useState<UserData | []>([]);

  const sampleAppContext: ContextProps = {
    userData,
    setUserData,
  };

  return (
    <AppContext.Provider value={sampleAppContext}>
      {props.children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
export { AppContext };
