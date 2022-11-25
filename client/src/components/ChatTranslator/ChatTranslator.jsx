import { observer } from 'mobx-react-lite';
import { useContext, useState } from 'react';
import classNames from 'classnames';
import s from './ChatTranslator.module.scss';
import Translate from './Translate/Translate';
import Chat from './Chat/Chat';
import Context from '../../index';

const ChatTranslator = observer(() => {
  const { user } = useContext(Context);
  const [element, setElement] = useState('chat');
  return (
    <div className={s.wrapper}>
      {user.width > 1317 ? (
        <>
          <Translate />
          <Chat />
        </>
      ) : (
        <div className={s.mobile_wrapper}>
          {element === 'chat' ? (
            <>
              <div className={s.title}>
                <div className={s.active}>Chat</div>
                <button
                  type="button"
                  className={classNames([
                    s.not_active,
                    s.right_bottom,
                  ])}
                  onClick={() => {
                    setElement('translator');
                  }}
                >
                  Translator
                </button>
              </div>
              <Chat />
            </>
          ) : (
            <>
              <div className={s.title}>
                <button
                  type="button"
                  className={classNames([
                    s.not_active,
                    s.left_bottom,
                  ])}
                  onClick={() => {
                    setElement('chat');
                  }}
                >
                  Chat
                </button>
                <div className={s.active}>Translator</div>
              </div>
              <Translate />
            </>
          )}
        </div>
      )}
    </div>
  );
});
export default ChatTranslator;
