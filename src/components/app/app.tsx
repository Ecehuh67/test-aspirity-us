import '../../less/style';
import PreviewScreen from '../preview-screen/preview-screen';
import StatisticPage from '../statistic-page/statistic-page';

const App: React.FC = () => {
  const [isPreviewScreen, setPreviewScreen] = React.useState(false);
  return (
    <>
      {isPreviewScreen && <PreviewScreen cb={setPreviewScreen} />}
      {!isPreviewScreen && <StatisticPage />}
    </>
  );
};

export default App;
