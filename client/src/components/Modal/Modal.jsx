import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import s from './Modal.module.scss';
import Context from '../../index';

// eslint-disable-next-line no-shadow
const Modal = observer(({ Modal, state }) => {
  const { modals } = useContext(Context);
  if (modals[state] === true) {
    return (
      <div className={s.wrapper}>
        <div className={s.content_wrapper}>{Modal}</div>
      </div>
    );
  // eslint-disable-next-line react/jsx-no-useless-fragment
  } return <></>;
});
export default Modal;
