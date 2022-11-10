import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import classNames from 'classnames';
import s from './Settings.module.scss';
import languages from '../../../utils/constants/languages';
import Context from '../../../index';
import { updateLanguages } from '../../../utils/api/userAPI';
import Close from '../Close';

const Settings = observer(() => {
  const { modals, user } = useContext(Context);
  const handleClose = () => {
    if (
      user.nativeLanguage !== ''
            && user.studiedLanguage !== ''
            && user.level !== ''
    ) {
      modals.setIsSettings(false);
      updateLanguages(
        user.nativeLanguage,
        user.studiedLanguage,
        user.level,
        user.isNotifications,
      );
    }
  };
  return (
    <>
      <Close callback={handleClose} />
      <div>
        <div className={classNames([s.description, s.description1])}>
          Native language
        </div>
        <select
          onChange={(e) => {
            user.setNativeLanguage(e.target.value);
          }}
          defaultValue={user.nativeLanguage}
        >
          {languages.names.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <div className={s.description}>Studied language</div>
        <select
          onChange={(e) => {
            user.setStudiedLanguage(e.target.value);
          }}
          defaultValue={user.studiedLanguage}
        >
          {languages.names.map((name) => (
            <option key={name}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <div className={s.description}>Level</div>
        <select
          onChange={(e) => {
            user.setLevel(e.target.value);
          }}
          defaultValue={user.level}
        >
          {languages.levels.map((level) => (
            <option key={level}>{level}</option>
          ))}
        </select>
      </div>
      <div className={s.checkbox_wrapper}>
        <input
          type="checkbox"
          checked={user.isNotifications}
          className={s.checkbox}
          onChange={() => {
            user.setIsNotifications(!user.isNotifications);
          }}
        />
        <div className={s.checkbox_description}>
          Send me updates, recommendations and learning tips
        </div>
      </div>
      <div>
        {user.nativeLanguage !== ''
                && user.studiedLanguage !== ''
                && user.level !== '' ? (
                  <div>
                    <button
                      type="button"
                      className={s.save}
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Save
                    </button>
                  </div>
          ) : (
            <div>
              <div className={classNames([s.save, s.not_active])}>
                Save
              </div>
            </div>
          )}
      </div>
      <div className={s.error}>
        {user.nativeLanguage !== ''
                && user.studiedLanguage !== ''
                && user.level !== ''
          ? ''
          : "To continue choose your native language, studied language and it's level"}
      </div>
    </>
  );
});
export default Settings;
