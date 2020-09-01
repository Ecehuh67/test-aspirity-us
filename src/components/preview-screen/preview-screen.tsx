import { PreviewScreenProps } from '../../ts-types';

const PreviewScreen: React.SFC<PreviewScreenProps> = ({ cb }) => {
  return (
    <main className="html-wrapper main preview-main">
      <h1 className="preview-main__caption">Welcome to Best Runner App !</h1>
      <button
        className="preview-main__button"
        type="button"
        onClick={() => {
          cb(false);
        }}
      >
        Let's run
      </button>
    </main>
  );
};

export default PreviewScreen;
