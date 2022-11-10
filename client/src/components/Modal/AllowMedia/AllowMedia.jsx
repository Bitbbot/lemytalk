import { useContext } from 'react';
import { observer } from 'mobx-react-lite';
import s from './AllowMedia.module.scss';
import Close from '../Close';
import Context from '../../../index';

const AllowMedia = observer(() => {
  const { modals } = useContext(Context);
  return (
    <>
      <Close
        callback={() => {
          modals.setIsAllowMedia(false);
        }}
      />
      <div className={s.title}>
        To start allow access to your camera and microphone
      </div>
    </>
  );
});

export default AllowMedia;
