import s from './Close.module.scss';
import closeimg from '../../assets/img/close.png';

// eslint-disable-next-line react/prop-types
function Close({ callback }) {
  return (
    <div className={s.close_wrapper}>
      <button
        type="button"
        className={s.close_img_wrapper}
        onClick={() => {
          callback();
        }}
      >
        <img
          src={closeimg}
          width="20px"
          height="20px"
          className={s.close_img}
          alt=""
        />
      </button>
    </div>
  );
}
export default Close;
