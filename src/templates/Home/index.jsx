import { Button } from '../../components/Button';
import { Heading } from '../../components/Heading';
import { useCounterContext } from '../../contexts/CounterContext';
import './styles.css';

export const Home = () => {
  const [state, actions] = useCounterContext();

  return (
    <div className="main">
      <div>
        <Heading text="Context API on React!" />
        <Heading text={state.counter} />
      </div>
      <div>
        <Button text="INCREASE" onButtonClick={actions.increase} />
        <Button text="DECREASE" onButtonClick={actions.decrease} />
        <Button text="RESET" onButtonClick={actions.reset} />
        <Button text="SET 10" onButtonClick={() => actions.setCounter({ counter: 10 })} />
        <Button disabled={state.loading} text="ASYNC INCREASE" onButtonClick={actions.asyncIncrease} />
      </div>
    </div>
  );
};
