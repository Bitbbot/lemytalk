import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useRef } from 'react';
import Context from '../../index';
import s from './LocalVideo.module.scss';
import noise from '../../assets/img/Untitled8.svg';

const LocalVideo = observer(() => {
  const { user } = useContext(Context);
  const localVideoRef = useRef();
  useEffect(() => {
    if (user.localStream) {
      const localVideo = localVideoRef.current;
      localVideo.srcObject = user.localStream;
      localVideo.onLoadedMetadata = () => {
        localVideo.play();
      };
    }
  }, [user.localStream]);
  return (
    <div className={s.wrapper}>
      {user.localStream ? (
        <div className={s.video_wrapper}>
          <video
            className={s.video}
            ref={localVideoRef}
            autoPlay
            muted
            width="100%"
          />
        </div>
      ) : (
      // <div></div>
        <img src={noise} width="100%" className={s.img} alt="" />
      )}
    </div>
  );
});
export default LocalVideo;
