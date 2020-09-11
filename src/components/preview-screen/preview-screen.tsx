import { PreviewScreenProps } from '../../ts-types';
import { SERVER_DELAY } from '../../consts';

const PreviewScreen: React.SFC<PreviewScreenProps> = ({
  cb,
  loadStatistic,
  loadData,
}) => {
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
