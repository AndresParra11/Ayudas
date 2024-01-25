import { useState } from "react";
import PropTypes from "prop-types";

const Example1 = () => {
  const [counter, setCounter] = useState(0);
  console.log("rendering with counter value", counter);
  const handleIncrement = () => {
    console.log("increasing, value before", counter);
    setCounter(counter + 1);
  };
  const handleDecrement = () => {
    console.log("decreasing, value before", counter);
    setCounter(counter - 1);
  };
  const handleSetToZero = () => {
    console.log("setting to zero");
    setCounter(0);
  };

  return (
    <>
      <Display counter={counter} />
      <Button onSmash={handleIncrement} text="plus" />
      <Button onSmash={handleDecrement} text="minus" />
      <Button onSmash={handleSetToZero} text="zero" />
    </>
  );
};

const Display = ({ counter }) => <div>{counter}</div>;
const Button = ({ onSmash, text }) => <button onClick={onSmash}>{text}</button>;

Display.propTypes = {
  counter: PropTypes.number.isRequired,
};

Button.propTypes = {
  onSmash: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};

export default Example1;
