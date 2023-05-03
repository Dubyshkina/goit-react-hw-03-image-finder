import s from './Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ onClick = null }) => {
  return (
    <>
      <button className={s.Button} onClick={onClick}>
        Load more
      </button>
    </>
  );
};

export default Button;
