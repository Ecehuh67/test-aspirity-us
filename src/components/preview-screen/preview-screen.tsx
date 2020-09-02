import axios from 'axios';
import { PreviewScreenProps } from '../../ts-types';
import { SERVER_URL } from '../../consts';
import { AppContext } from '../context-provider/context-provider';

const PreviewScreen: React.SFC<PreviewScreenProps> = ({ cb }) => {
  const { setUserData } = React.useContext(AppContext);
  return (
    <main className="html-wrapper main preview-main">
      <h1 className="preview-main__caption">Welcome to Best Runner App !</h1>
      <button
        className="preview-main__button"
        type="button"
        onClick={() => {
          axios.get(SERVER_URL).then(({ data }) => {
            setUserData(data);
            cb(false);
          });
        }}
      >
        Let's run
      </button>
    </main>
  );
};

export default PreviewScreen;
