import { useContext, useState } from 'react';
import { observer } from 'mobx-react-lite';
import s from './Report.module.scss';
import Close from '../Close';
import Context from '../../../index';

const Report = observer(() => {
  const { modals } = useContext(Context);
  const [reason, setReason] = useState('');

  // eslint-disable-next-line no-shadow
  const handleChange = (reason) => {
    setReason(reason);
  };
  const handleReport = () => {
    if (reason !== '') {
      console.log(reason);
      modals.setIsReport(false);
    }
  };

  return (
    <>
      <Close
        callback={() => {
          modals.setIsReport(false);
        }}
      />
      <div className={s.title}>Choose a reason of the report</div>
      <div>
        <form className={s.form_wrapper}>
          <div className={s.label}>
            <label htmlFor="question0">
              <input
                type="radio"
                id="question0"
                name="question"
                onClick={() => {
                  handleChange('Insulting behavior');
                }}
              />
              Insulting behavior
            </label>
          </div>
          <div className={s.label}>
            <label htmlFor="question1">
              <input
                type="radio"
                id="question1"
                name="question"
                onChange={() => {
                  handleChange('Advertisement');
                }}
              />
              Advertisement
            </label>
          </div>
          <div className={s.label}>
            <label htmlFor="question2">
              <input
                type="radio"
                id="question2"
                name="question"
                onChange={() => {
                  handleChange('Pornography');
                }}
              />
              Pornography
            </label>
          </div>
          <div className={s.label}>
            <label htmlFor="question3">
              <input
                type="radio"
                id="question3"
                name="question"
                onChange={() => {
                  handleChange('Other');
                }}
              />
              Other
            </label>
          </div>
        </form>
      </div>
      <button
        type="button"
        className={s.submit}
        onClick={() => {
          handleReport();
        }}
      >
        Submit
      </button>
    </>
  );
});

export default Report;
