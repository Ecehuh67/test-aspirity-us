import axios from 'axios';
import { PreviewScreenProps } from '../../ts-types';
import { SERVER_URL, SERVER_DELAY } from '../../consts';
// import { AppContext } from '../context-provider/context-provider';

const PreviewScreen: React.SFC<PreviewScreenProps> = ({
  cb,
  loadStatistic,
  loadData,
}) => {
  // const { setUserData } = React.useContext(AppContext);

  // React.useEffect(() => {
  //   loadStatistic();
  // }, []);
  return (
    <main className="html-wrapper main preview-main">
      <h1 className="preview-main__caption">Welcome to Best Runner App !</h1>
      <button
        className="preview-main__button"
        type="button"
        onClick={() => {
          cb(false);
          setTimeout(() => {
            loadStatistic();
            loadData(true);
          }, SERVER_DELAY);
        }}
      >
        Let&apos;s run
      </button>
    </main>
  );
};

export default PreviewScreen;
