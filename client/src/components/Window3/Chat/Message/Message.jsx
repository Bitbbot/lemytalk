import s from './Message.module.scss';

// eslint-disable-next-line react/prop-types
function Message({ user, text }) {
  return (
    <div className={s.wrapper}>
      {user === 'you' ? (
        <div className={s.you}>
          <div className={s.text}>{text}</div>
        </div>
      ) : (
        <div />
      )}
      {user === 'stranger' ? (
        <div className={s.stranger}>
          <div className={s.text}>{text}</div>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}
export default Message;
