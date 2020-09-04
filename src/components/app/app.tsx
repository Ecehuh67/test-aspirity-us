import '../../less/style';
import PreviewScreen from '../preview-screen/preview-screen';
import StatisticPage from '../statistic-page/statistic-page';
import ContextProvider from '../context-provider/context-provider';
import LoadingScreen from '../loading-screen/loading-screen';

const App: React.FC = () => {
  const [isPreviewScreen, setPreviewScreen] = React.useState(true);
  const [isDataLoaded, setDataLoad] = React.useState(false);
  return (
    <>
      {isPreviewScreen && (
        <PreviewScreen cb={setPreviewScreen} loadData={setDataLoad} />
      )}
      {!isPreviewScreen && !isDataLoaded && <LoadingScreen />}
      {isDataLoaded && <StatisticPage />}
    </>
  );
};

export default App;
