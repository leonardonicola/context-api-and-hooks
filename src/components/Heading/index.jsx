import P from 'prop-types'
import './styles.css'
export const Heading = ({text}) => {
  return (
    <h1 style={{ fontSize: '3em'}} className={typeof text === "number" ? 'counter': ''} >
      {text}
    </h1>
  );
};

Heading.propTypes = {
  text: P.oneOfType([P.string, P.number])
}
