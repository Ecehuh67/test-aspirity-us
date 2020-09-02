import '../../less/style';
import PreviewScreen from '../preview-screen/preview-screen';
import StatisticPage from '../statistic-page/statistic-page';
import ContextProvider from '../context-provider/context-provider';

const App: React.FC = () => {
  const [isPreviewScreen, setPreviewScreen] = React.useState(true);
  return (
    <>
      {isPreviewScreen && <PreviewScreen cb={setPreviewScreen} />}
      {!isPreviewScreen && <StatisticPage />}
    </>
  );
};

export default App;
