import axios from 'axios';
import { AppContext } from '../context-provider/context-provider';
import {
  TYPES_OF_SORTING,
  validateDate,
  changeState,
  SERVER_URL,
} from '../../consts';
import { PopupProps } from '../../ts-types';

const NewData: React.SFC<PopupProps> = ({
  cb,
  editPoint,
  resetEdit,
  editData,
  addData,
}) => {
  // const { setUserData } = React.useContext(AppContext);
  const popup = React.useRef(null);
  const form = React.useRef(null);

  const [fields, setFields] = React.useState({
    date: {
      value: '',
      isValid: null,
    },
    type: {
      value: '',
      isValid: null,
    },
    distance: {
      value: '',
      isValid: null,
    },
  });

  const resetData = () => {
    popup.current.classList.add('visually-hidden');
    setFields((prev) => {
      return TYPES_OF_SORTING.reduce((acc, curr) => {
        return {
          ...acc,
          [curr]: {
            value: '',
            isValid: null,
          },
        };
      }, prev);
    });
    resetEdit({ isEdit: false });
  };

  React.useEffect(() => {
    cb(popup);
  }, [popup]);

  React.useEffect(() => {
    if (editPoint.isEdit === true) {
      Object.keys(fields).forEach((type) => {
        changeState(type, true, editPoint[type], setFields);
      });
    }
  }, [editPoint]);

  return (
    <>
      <div ref={popup} className="html-wrapper visually-hidden">
        <main className=" main popup-main">
          <section className="popup-main__section">
            <button
              className="popup-main__button-close"
              type="button"
              onClick={resetData}
            >
              &times;
            </button>
            <div className="popup-main__wrapper">
              <h1 className="popup-main__caption">
                {editPoint.isEdit === false
                  ? 'Fill in your training'
                  : 'Edit your training'}
              </h1>
              <form className="popup-main__form form" id="form" ref={form}>
                <div className="form__item-wrapper">
                  <label htmlFor="date">Date</label>
                  <input
                    className="form__date"
                    id="date"
                    placeholder="dd/mm/yyyy"
                    value={fields.date.value}
                    type="text"
                    onChange={(evt) => {
                      const { value } = evt.target;
                      const isValid = validateDate(value);
                      changeState('date', isValid, value, setFields);
                    }}
                  />
                </div>
                <div className="form__item-wrapper">
                  <label htmlFor="type">Type</label>
                  <select
                    className="form__type"
                    id="type"
                    value={
                      fields.type.value === '' ? 'None' : fields.type.value
                    }
                    onChange={(evt) => {
                      const { value } = evt.target;
                      const isValid = value !== 'None';
                      changeState('type', isValid, value, setFields);
                    }}
                  >
                    <option className="form__type-item" value="None">
                      None
                    </option>
                    <option className="form__type-item" value="Skiing">
                      Skiing
                    </option>
                    <option className="form__type-item" value="Running">
                      Running
                    </option>
                    <option className="form__type-item" value="Cycling">
                      Cycling
                    </option>
                    <option className="form__type-item" value="Walking">
                      Walking
                    </option>
                  </select>
                </div>
                <div className="form__item-wrapper">
                  <label htmlFor="distance">Distance</label>
                  <input
                    className="form__distance"
                    id="distance"
                    type="number"
                    value={fields.distance.value}
                    placeholder="km"
                    onChange={(evt) => {
                      const { value } = evt.target;
                      const isValid = value.length > 0;
                      changeState('distance', isValid, value, setFields);
                    }}
                  />
                </div>
              </form>
              <button
                className="popup-main__button-send"
                type="button"
                disabled={
                  !Object.keys(fields)
                    .map((el) => fields[el].isValid)
                    .every((item) => item === true)
                }
                onClick={() => {
                  // Save new user's data
                  const obj = Object.keys(fields).reduce((acc, curr) => {
                    return {
                      ...acc,
                      [curr]: fields[curr].value,
                    };
                  }, {});

                  if (!editPoint.isEdit) {
                    addData(obj);
                    resetData();
                    form.current.reset();
                  } else {
                    editData(Object.assign(editPoint, obj));
                    resetData();
                    form.current.reset();
                  }
                }}
              >
                OK
              </button>
            </div>
          </section>
        </main>
        <div className="popup-main__overlay" />
      </div>
    </>
  );
};

export default NewData;
