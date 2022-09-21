import P from 'prop-types'
import './styles.css'
export const Button = ({text, onButtonClick, disabled = false}) => {
  return (
    <button style={{ fontSize: '20px' }} disabled={disabled} onClick={onButtonClick}>
      {text}
    </button>
  );
};

Button.propTypes = {
  text: P.string.isRequired,
  onButtonClick: P.func.isRequired,
  disabled: P.bool
}
